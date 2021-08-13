const formulario = document.querySelector('.formulario')
const botonSubmit = document.querySelector('#login');

// Validar Formulario
botonSubmit.addEventListener('click', function(evento) {
	evento.preventDefault();
	
	// Inputs
	const inputCorreo = document.querySelector('#correo');
	const inputClave = document.querySelector('#clave');

	// Añadir valor de los input en un objeto
	const formInput = {
		correo: inputCorreo.value,
		clave: inputClave.value
	}

	// Comprobar que los inputs no están vacíos
	if (formInput.correo === '' || formInput.clave === '') {
		mostrarAlerta(false, "Todos los campos son obligatorio.");
	} else {
		mostrarAlerta(true, "Se ha iniciado sesión con éxito");
	}



	function mostrarAlerta(estado, mensaje) {
		const crearDiv = document.createElement('DIV');
		if (estado) {
			crearDiv.classList.add('exito');
			crearDiv.textContent = mensaje;
		} else {
			crearDiv.classList.add('error');
			crearDiv.textContent = mensaje;
		}
		formulario.appendChild(crearDiv);

		setTimeout(function () {
				crearDiv.remove();
			}, 5000);
	}

});
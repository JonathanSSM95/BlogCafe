
const datos = {
    nombre:  '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input',leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//El Evento de Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    //Validar el formulario
    const {nombre, email, mensaje } = datos ;

    if(nombre === '' || email ==='' || mensaje ===''){
      mostrarAlerta('Todos los campos son obligatodrios', 'error');

        return;
    }
    
        //Enviar lerta de que se envio correctamente
        mostrarAlerta('mensaje enviado correctamente');
    

});

function leerTexto(e) {
    datos[e.target.id] = e.target.valvue;

    // console.log(datos);
}


//Muestra un error en la pantalla 
function mostrarAlerta(mensaje, error = null ) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error')
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparezca despues de 3 segundos
    setTimeout(() => {
        alerta.remove();    
    }, 3000);
 }

// function mostrarError(mensaje) {
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');

//     formulario.appendChild( error );

//     //Desaparezca despues de 3 segundos
//     setTimeout(() => {
//         error.remove();
//     }, 3000);
// }

// function enviandoFormulario(mensaje) {
//     const correcto = document.createElement('P');
//     correcto.textContent = mensaje;
//     correcto.classList.add('correcto');

//     formulario.appendChild( correcto );

//     setTimeout(()=> {
//         correcto.remove()
//     }, 5000);
// }



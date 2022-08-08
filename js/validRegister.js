
//let inputs = document.querySelectorAll('input');
//console.log(inputs);
//objeto con las expresiones regulares
let expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    dni: /^\d{8,8}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    password: /^.{4,12}$/
}

let campos ={
    nombre : false,
    apellido : false,
    dni:false,
    mail : false,
    usuario : false,
    password : false
}




/**
 * verifica si el input.target.name que recibe coincide con alguna
 * de las opciones del switch al coincidir llama a una funcion
 * enviandole de parametro el objeto con la propiedad que le corresponde,
 * el target del input, y el nombre del input
 * @param {*} e 
 */
let validarFormulario = (e) => {

    switch (e.target.name) {
        case 'nombre':
            validarCampo(expresiones.nombre, e.target, 'nombre')
            break;
        case 'apellido':
            validarCampo(expresiones.apellido, e.target, 'apellido')
            break;
        case 'dni':
            validarCampo(expresiones.dni, e.target, 'dni')
            break;
        case 'mail':
            validarCampo(expresiones.correo, e.target, 'mail')
            break;
        case 'usuario':
            validarCampo(expresiones.usuario, e.target, 'usuario')
            break;
        case 'password':
            validarCampo(expresiones.password, e.target, 'password')
            validarPassword2()
            break;
        case 'password2':
            validarPassword2();
            break;
    }

}


/**
 * verifica si el test de la expresion, del valor del input es correcto
 * se procede darle estilo al input en caso de ser verdadero o si el falso 
 * salta un parrafo con el error.
 * @param {*} expresion 
 * @param {*} input 
 * @param {*} campo 
 */
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        console.log('correcto')
        $(`.grupo__${campo}`).css({ 'border': '2px solid #1ed12d', 'border-radius': '6px', 'background': '#f9fafb' });
        document.querySelector(`.div__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
        campos[campo] = true;
    } else {
        console.log('incorrecto');
        $(`.grupo__${campo}`).css({ 'border': '2px solid #bb2929', 'border-radius': '6px', 'background': '#f9fafb' });
        document.querySelector(`.div__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

/**
 * verifica si la password2 coincide con la primer password
 */
const validarPassword2 = () => {
    if ($('#repPass').val() === $('#pass').val()) {
        $(`.grupo__password2`).css({ 'border': '2px solid #1ed12d', 'border-radius': '6px', 'background': '#f9fafb' });
        document.querySelector(`.div__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['password'] = true;  
    } else {

        $(`.grupo__password2`).css({ 'border': '2px solid #bb2929', 'border-radius': '6px', 'background': '#f9fafb' });
        document.querySelector(`.div__password2 .formulario__input-error`).classList.add('formulario__input-error-activo')
        campos['password'] = false;
    }
}


//llamo a la lista de nodos, lo convierto en array y lo recorro
//por cada input al teclear y fuera de foco, llamo a una funcion
$('input').toArray().forEach(input => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})


//si los campos son true envio el formulario, sino impido que se envie
$('#formulario').on('submit', (e) => {

    e.preventDefault();
  
    const terminos = document.getElementById('termino');
    if(campos.nombre && campos.apellido  && campos.mail && campos.usuario && campos.password && terminos.checked ){
        document.querySelector('#formulario').reset();
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
  setTimeout(()=>{
	document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
  },5000);
    }else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
	setTimeout(()=>{
		document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
	  },5000);
      e.preventDefault();
    }

})
//MUESTRA EN PANTALLA EL PRECIO DEL SEGURO SELECCIONADO

const btnEnviar = document.getElementById('enviar');
const tipoSeguro = document.getElementById('tipoSeguro');
const precio = document.getElementById('mostrarPrecio');

tipoSeguro.addEventListener('change', () => {
    if (tipoSeguro.value === 'basico') {
        precio.textContent = '$500';
    } else if (tipoSeguro.value === 'intermedio') {
        precio.innerHTML = '$1000';
    } else if (tipoSeguro.value === 'premium') {
        precio.innerHTML = '$1500';
    } else {
        precio.innerHTML = '-';
    }
})

// VALIDACION Y ENVIO DEL FORMULARIO

btnEnviar.addEventListener('click', () => {
    const formulario = new FormData(document.getElementById('contratarSeguro'));
    let validar = 0;
    for (let item of formulario) {
        item[1] !== '' ? validar++ : document.getElementById(`${item[0]}`).classList.add('requerido');
    }
    validar === 5 ? envioCorrecto() : alert("Todos los campos son requeridos.");
})

const campos = document.querySelectorAll('input');

// QUITAR BORDE ROJO AL HACER FOCUS EN CAMPOS

for (let campo of campos) {
    campo.addEventListener('focus', () => {
        campo.classList.remove('requerido');
    })
}

tipoSeguro.addEventListener('focus', () => {
    tipoSeguro.classList.remove('requerido');
})
// ENVIO CORRECTO DE FORMULARIO

function envioCorrecto() {
    alert('Formulario enviado con éxito')
    for (let campo of campos) {
        campo.value = '';
    }
    tipoSeguro.value = '';
    precio.innerHTML = '-';
}
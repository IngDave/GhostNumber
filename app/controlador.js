//permite que se genere un loader de x tiempo
let container = document.getElementById('contenedor');

function ocultarPreloader(tiempo) {
    setTimeout(function () {
        document.getElementById('preloader').style.display = 'none';
    }, tiempo);
    setTimeout(() => {
        container.classList.remove("ocultar");
    }, tiempo);
}
ocultarPreloader(4100);



//declaracion de variables
let intentos = 1;
let numeroSecreto = generarNumero();
let numeroSorteado = [];

//reemplazas el contenido actual de los elementos con el nuevo contenido
//esta funcion permite a la funcion declaraMensajes() reemplazar el textos de las
//etiquetas h1 y p en este caso.
function asignarTextos(elemento, texto) {
    let title = document.querySelector(elemento);
    title.innerHTML = texto;
    return;
}

function declararMensajes() {
    asignarTextos('p', 'Digite un numero en el recuadro de abajo');
}
declararMensajes();

//retorna un numero aleatorio usando el medoto Math.random, entableciendo un limite entre
// 1 y 10, se puede editar para darle dificultar al juego.
function generarNumero() {
    return Math.floor(Math.random() * 10) + 1;
}

// limpia el valor del identificador valorUsuario a un valor de entrada vacia.
function clear() {
    document.querySelector('#valorUsuario').value = '';
}

//comparar el número ingresado por el usuario con un número secreto en un juego de adivinanzas
//dependiendo del flujo dado.
function send() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextos('p', `Has acertado, ¡Genial!, el número era el ${numeroSecreto}, has intentado ${intentos} ${intentos == 1 ? ' vez' : ' veces'}`);
        clear();
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroDeUsuario < numeroSecreto) {
        asignarTextos('p', `El numero es mayor, ingresaste: ${numeroDeUsuario}`);
        clear();
    } else {
        asignarTextos('p', `El numero es menor, ingresaste: ${numeroDeUsuario}`);
        clear();
    }
    intentos++;
}

// se encarga de reiniciar el estado de un juego al seleccionar el buttom
function restartGame() {
    clear();
    declararMensajes();
    numeroSecreto = generarNumero();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

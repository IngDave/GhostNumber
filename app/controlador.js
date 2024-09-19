
let intentos = 1;
let numeroSecreto = generarNumero();
let numeroSorteado = [];

function asignarTextos(elemento, texto) {
    let title = document.querySelector(elemento);
    title.innerHTML = texto;
    return;
}

function declararMensajes() {
    asignarTextos('h1', '¡Juego: adivina el número!');
    asignarTextos('p', 'Ingresa un numero del 1 al 10');
}
declararMensajes();

function generarNumero() {
    return Math.floor(Math.random() * 10) + 1;
  
}

function clear() {
    document.querySelector('#valorUsuario').value = '';
}

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

function restartGame() {
    clear();
    declararMensajes();
    numeroSecreto = generarNumero();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

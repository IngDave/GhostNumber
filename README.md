# Numero Misterioso | Game
Implementando un simple juego de "Adivina el número" en JavaScript, donde el usuario intenta adivinar un número aleatorio generado entre 1 y 10.
_________________________________________________________________

Documentación del código en relación a sus funciones y variables:

Variables:

intentos: Inicialmente establecida en 1, esta variable lleva la cuenta de cuántos intentos ha hecho el usuario para adivinar el número secreto.
numeroSecreto: Almacena el número aleatorio generado por la función generarNumero(). Este número será el que el usuario debe adivinar.
numeroSorteado: Se declara pero no se utiliza en este código, por lo que podría ser eliminada si no tiene uso futuro.

Funciones:
asignarTextos(elemento, texto): 
Recibe como parámetros un selector de elemento HTML y el texto que se le quiere asignar.
Utiliza querySelector para seleccionar el elemento en el DOM y luego cambia su contenido con innerHTML.

declararMensajes():
Llama a asignarTextos para definir los textos iniciales en los elementos HTML h1 y p, indicando que el juego ha comenzado y pidiendo al usuario que ingrese un número entre 1 y 10.

generarNumero():
Genera un número aleatorio entre 1 y 10 (inclusive) utilizando Math.random() y lo devuelve.

clear():
Limpia el valor del campo de entrada de texto (con id #valorUsuario), donde el usuario ingresa su número.

send():
Toma el valor ingresado por el usuario desde el input con id valorUsuario y lo convierte a un número entero utilizando parseInt.
Verifica si el número ingresado coincide con numeroSecreto:
    Si es correcto, muestra un mensaje de acierto y desactiva el botón de reinicio.
    Si el número ingresado es menor o mayor, proporciona pistas al usuario indicando si debe ingresar un número mayor o menor.
    Incrementa el contador de intentos tras cada verificación.

restartGame():
Reinicia el juego restableciendo los textos iniciales, generando un nuevo número aleatorio y volviendo a poner el contador de intentos en 1.
Vuelve a desactivar el botón de reinicio.

____________________________________________________________________________________

Flujo del Juego:

Al cargar el juego, se llama a declararMensajes() para mostrar los textos iniciales.
El usuario ingresa un número entre 1 y 10.
Al presionar un botón, se ejecuta send() para verificar si el número es correcto, dándole retroalimentación.
Si el usuario adivina correctamente, se le permite reiniciar el juego con el botón de reinicio, que ejecuta restartGame().

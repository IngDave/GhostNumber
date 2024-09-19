# Numero Misterioso | Game

Implementando un simple juego de "Adivina el número" en JavaScript, donde el usuario intenta adivinar un número aleatorio generado entre 1 y 10.

Manual de Usuario: Adivina el Número

Descripción:

"Adivina el Número" es un sencillo juego donde el objetivo es adivinar un número secreto generado aleatoriamente entre 1 y 10. El juego proporciona pistas para guiar al jugador hasta que acierte.

Instrucciones para jugar:
Inicio del Juego:

En la parte superior de la página verás un título que dice: "¡Juego: adivina el número!" y un mensaje que te invita a "Ingresa un número del 1 al 10".
Ingresar un Número:

Usa el campo de texto debajo del mensaje para ingresar un número entre 1 y 10.
Enviar tu Número:

Después de ingresar tu número, presiona el botón Enviar.
Recibir Retroalimentación:

Si el número ingresado es correcto, el juego te mostrará un mensaje felicitándote y diciéndote cuántos intentos realizaste.
Si el número es incorrecto, el juego te indicará si debes probar con un número mayor o menor.
Reiniciar el Juego:

Una vez que aciertes el número, el botón de Reiniciar estará disponible. Al hacer clic en él, se generará un nuevo número secreto y podrás comenzar nuevamente.
Número de Intentos:

El juego lleva un registro de los intentos que has realizado y te lo mostrará cada vez que aciertes el número.
Funcionalidades del Juego:
Generación Aleatoria de Número: Cada vez que inicias un nuevo juego, se genera un número al azar entre 1 y 10.
Pistas: Si fallas, el juego te indicará si el número secreto es mayor o menor al que ingresaste.
Reinicio Automático: Tras adivinar el número, el juego te permite reiniciar y volver a jugar con un nuevo número.
Controles:
Campo de entrada: Donde ingresas el número que crees que es el correcto.
Botón "Enviar": Envia tu número para verificar si es correcto.
Botón "Reiniciar": Reinicia el juego y genera un nuevo número aleatorio.
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

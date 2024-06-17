
# Prompts

Se usó GPT-4o para generar los siguientes prompts.

## Prompt 1

Dado que eres un desarrollador web experto. Necesitamos crear una web que tendrá lo siguiente:

1.- La página principal que servirá de presentación y servirá de punto de entrada para las dos funcionalidades “StopWatch” y “Countdown”.
2.- La funcionalidad Stopwatch tendrá un cronómetro junto con los botones Start y Clear, además de un botón Back. El cronómetro tendrá horas, minutos, segundos y milisegundos. Estando inicialmente en 00:00:00  000
    2.1.- El botón “Start”, en color verde, arrancará el cronómetro.
        2.1.1.- Una vez iniciado el cronómetro el botón “Start” cambiará a “Pause”.
        2.1.2.- Si se pulsa en “Pause” el cronómetro se parará y el botón “Pause” cambiará a “Continue” en color azul.
        2.1.3.- Si se pulsa en el botón “Continue” el cronómetro seguirá por donde estaba, y el botón “Continue” volverá a cambiar a “Pause” en color verde.
    2.2.- El botón “Clear”, en color rojo, parará y reseteará el cronómetro a 0. Además, al resetear el cronómetro a 0, el botón 2.1 volverá a mostrar "Start" en color verde, independientemente del estado en el que estuviera antes.
    2.3.- El botón “Back” en color gris, llevará a la página principal.
3.- La funcionalidad Countdown tendrá un temporizador junto con los botones Set y Clear, además de un botón Back. El temporizador será similar al de la funcionalidad Stopwatch. También tendrá botones correspondientes a los números para que el usuario pueda poner un tiempo en el cronómetro. Se permitirá la entrada por medio de dichos números o directamente por teclado.
    3.1. El botón Set, en color verde, arrancará la cuenta atrás con el tiempo introducido.
        3.1.1.- Una vez iniciado el temporizador el botón “Set” cambiará a “Pause”.
        3.1.2.- Si se pulsa en “Pause” el temporizador se parará y el botón “Pause” cambiará a “Continue” en color azul.
        3.1.3.- Si se pulsa en el botón “Continue” el temporizador seguirá por donde estaba, y el botón “Continue” volverá a cambiar a “Pause” en color verde.
    3.2.- El botón “Clear”, en gris, parará y reseteará el temporizador a 0. Además, al resetear el temporizador a 0, el botón 3.1 volverá a mostrar "Set" en color verde, independientemente del estado en el que estuviera antes.
    3.3.- El botón “Back” en color gris, llevará a la página principal.

Funcionalidades adicionales que estarán presentes en todas las páginas:
1.- Un botón de ayuda que llevará a una página de ayuda con las instrucciones de uso de la web.
2.- Un botón para añadir la página a favoritos.
3.- Un botón para cambiar a pantalla completa.

Utiliza un diseño con números grandes y fáciles de leer. La página principal tendrá un diseño minimalista y moderno.

Todo contenido en dos archivos: index.html y script.js. Ambos archivos estarán en la misma carpeta.

## Prompt 2

Respecto a lo anterior, cambia todos los textos a inglés. 
Además la página Countdown parece no funcionar correctamente, cuando pulso en set después de haber introducido el tiempo el temporizador no arranca. Por favor, corrige este error. Pero incluye además botones numéricos para poder pulsar en ellos directamente con el ratón.
Adicionalmente mejora el diseño de la página principal para hacerlo más colorido y atractivo para el usuario.

## Prompt 3

Completa la información de la página de ayuda con instrucciones detalladas de cómo usar el cronómetro y el temporizador.
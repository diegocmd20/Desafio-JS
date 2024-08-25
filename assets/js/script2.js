/* Variables */

let box = document.getElementById('caja');
let button1 = document.getElementById('btn-1');
let button2 = document.getElementById('btn-2');
let button3 = document.getElementById('btn-3');
let button4 = document.getElementById('btn-4');
let button5 = document.getElementById('btn-5');
let button6 = document.getElementById('btn-6');


/* Evento de color por defecto para la caja*/

box.addEventListener("click", function () {
    box.style.backgroundColor = '#FFFFFF';
  });

/* Eventos para los colores */

button1.addEventListener("click", function () {
    box.style.backgroundColor = '#e53e3e';
  });
button2.addEventListener("click", function () {
    box.style.backgroundColor = '#dd6b20';
  });
button3.addEventListener("click", function () {
    box.style.backgroundColor = '#faf089';
  });
button4.addEventListener("click", function () {
    box.style.backgroundColor = '#48bb78';
  });
button5.addEventListener("click", function () {
    box.style.backgroundColor = '#81e6d9';
  });
button6.addEventListener("click", function () {
    box.style.backgroundColor = '#d53f8c';
  });
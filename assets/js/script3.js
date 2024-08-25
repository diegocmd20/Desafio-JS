/* Variables */

let respuesta = document.getElementById("resultado");
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

let suma = document.getElementById("btn-sumar");
let resta = document.getElementById("btn-restar");

/* Eventos y Operaciones */

suma.addEventListener("click", function () {
  let operador1 = parseFloat(valor1.value);
  let operador2 = parseFloat(valor2.value);
  let suma = operador1 + operador2;
  respuesta.innerHTML = suma;
});
resta.addEventListener("click", function () {
  let operador1 = parseFloat(valor1.value);
  let operador2 = parseFloat(valor2.value);
  let resta = operador1 - operador2;
  if (resta <= 0){
    respuesta.innerHTML = 0;
  }else{
    respuesta.innerHTML = resta;
  }
});

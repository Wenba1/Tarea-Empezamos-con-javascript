import sumar from "./sumador.js";
import multiplicar from "./multiplicador.js"; // Asegúrate de crear este módulo

// SUMA
const firstSum = document.querySelector("#primer-numero-suma");
const secondSum = document.querySelector("#segundo-numero-suma");
const sumForm = document.querySelector("#sumar-form");
const sumResult = document.querySelector("#resultado-suma");

sumForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstSum.value);
  const secondNumber = Number.parseInt(secondSum.value);

  sumResult.innerHTML = "<p>Resultado: " + sumar(firstNumber, secondNumber) + "</p>";
});

// MULTIPLICACIÓN
const firstMult = document.querySelector("#primer-numero-multiplicar");
const secondMult = document.querySelector("#segundo-numero-multiplicar");
const multForm = document.querySelector("#multiplicar-form");
const multResult = document.querySelector("#resultado-multiplicacion");

multForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstMult.value);
  const secondNumber = Number.parseInt(secondMult.value);

  multResult.innerHTML = "<p>Resultado: " + multiplicar(firstNumber, secondNumber) + "</p>";
});

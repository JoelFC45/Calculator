const display = document.querySelector("#display");

var num1 = null;
var num2 = null;
var operator = null;

function addNumber(number) {
  display.value += number;
}

function erase() {
  display.value = display.value.slice(0, -1);
}

function eraseAll() {
  display.value = "";
  num1 = null;
  num2 = null;
  operator = null;
}

function doting() {
  if (display.value.includes('.')) {
    return;
  }
  if (display.value === "") {
    display.value = "0.";
  } else {
    display.value += ".";
  }
}

function transform(num) {
  if (num1 === null) {
    num1 = parseFloat(num);
    return num1;
  } else {
    num2 = parseFloat(num);
    return num2;
  }
}

function chooseOperator(op) {
  if (display.value === "") {
    return;
  }
  
  if (num1 !== null) {
      calculate();
  }

  transform(display.value);
  
  operator = op;
  display.value = "";
}

function calculate() {
  if (operator === null || num1 === null) {
      return;
  }
    
  transform(display.value);
  
  if (num2 === null) {
      return;
  }

  let resultado;
  switch (operator) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "X":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        resultado = "Erro!";
      } else {
        resultado = num1 / num2;
      }
      break;
  }
  
  display.value = resultado;
  num1 = resultado;
  num2 = null;
  operator = null;
}
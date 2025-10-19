function addNumber(number) {
  document.querySelector("#display").value += number;
}
var num1 = null;
var num2 = null;
var operator = null;
function erase() {
  let tela = document.querySelector("#display").value;
  document.querySelector("#display").value = tela.slice(0, -1);
}
function eraseAll() {
  document.querySelector("#display").value = "";
}
function doting() {
  if (document.querySelector("#display").value == null) {
    document.querySelector("#display").value = "0.";
  } else {
    document.querySelector("#display").value += ".";
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
  let num = document.querySelector("#display").value;
  transform(num);
  document.querySelector("#display").value = "";
  operator = op;
  return operator;
}

function calculate() {
  switch (operator) {
    case "+":
      document.querySelector("#display").value = num1 + num2;
      break;
    case "-":
      document.querySelector("#display").value = num1 - num2;
      break;
    case "*":
      document.querySelector("#display").value = num1 * num2;
      break;
    case "/":
      document.querySelector("#display").value = num1 / num2;
      break;
  }
}

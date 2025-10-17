function addNumber(number) {
    document.querySelector('#display').value += number;
}
function erase() {
   let tela = document.querySelector('#display').value;
   document.querySelector('#display').value = tela.slice(0, -1);
}
function eraseAll(){
    document.querySelector('#display').value = "";
}
function doting(){
    document.querySelector('#display').value += ".";
}
function transform(){
    let operador = document.querySelector('#display').value;
    parseFloat(operador); 
}
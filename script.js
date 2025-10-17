function addNumber(number) {
    document.querySelector('#display').value += number;
    console.log(number);
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
const input = document.getElementById('input');
const button = document.getElementById('button');
const buttonDelete = document.getElementById('buttonDelete');
const calcular = document.getElementById('calcular');
const solution = document.getElementById('solution');

const array = []

button.addEventListener('click', pushNumber);
buttonDelete.addEventListener('click', popNumber)

function pushNumber() {
    
    const inputIn = document.getElementById('inputIn');
    array.push(Number(input.value));
    inputIn.innerHTML = array;

    

}

button.addEventListener('click', clear);

function clear() {
    input.value = '';
}
    
function popNumber() {
    const inputIn = document.getElementById('inputIn');
    array.pop(input.value);
    inputIn.innerHTML = array;
}

calcular.addEventListener('click', calcularModa);

function calcularModa() {
  
const repetidos = [];
let repetidoAcumulado = 0;

for(let i = 0; i < array.length; i++) {
    
    let repetidoActual = 0;

    array.forEach((value, j) => {

        if (array[i] == value && i <= j) {
            repetidoActual++;
 
        }  
    });
     if(repetidoActual > repetidoAcumulado) {
            repetidoAcumulado = repetidoActual;
            repetidos.push(array[i]);
            

        }
    repetidoActual = 0;
}

solution.innerHTML = repetidos[repetidos.length - 1];
}






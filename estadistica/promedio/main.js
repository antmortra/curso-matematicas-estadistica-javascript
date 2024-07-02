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
    
    
    //
}

function popNumber() {
    const inputIn = document.getElementById('inputIn');
    array.pop(input.value);
    inputIn.innerHTML = array;
}

calcular.addEventListener('click', calcularPromedio);

function calcularPromedio() {

   const solution1 = array.reduce((a, b) => (a + b)) / (array.length);
    solution.innerHTML = solution1;

}


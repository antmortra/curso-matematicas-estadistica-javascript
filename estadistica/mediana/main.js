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

calcular.addEventListener('click', calcularMediana);

function calcularMediana() {

   const solution1 = array.sort((a, b) => a - b);

   if (!Number.isInteger(array.length/2)) {
   
   const solution2 = solution1[(Math.ceil(array.length/2))-1];

    solution.innerHTML = solution2;
    }
    else {

        const solution2 = (array[(array.length/2)-1] + array[(array.length/2)]) / 2 ;

        solution.innerHTML = solution2;
    }

}






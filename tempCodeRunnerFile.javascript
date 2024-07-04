const array = [1, 1, 2, 4, 5, 1, 2, 2, 2];


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

console.log(repetidos[repetidos.length - 1]);
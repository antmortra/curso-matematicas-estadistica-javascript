const producto = document.getElementById('producto');
const descuento = document.getElementById('descuento');
const calcular = document.getElementById('calcular');
const inputCupon = document.querySelector('#cupon');

calcular.addEventListener('click', calcularDescuento);

function calcularDescuento() {
    const precio = document.getElementById('precio');
    const cupon = inputCupon.value;

    if(!producto.value && !descuento.value ) {
        precio.innerHTML = 'Rellena el formulario';
        return;
    }
    else if( descuento.value && producto.value) {
        if( descuento.value > 100) {
            precio.innerHTML = 'Tiene que ser menor que 100';
        }
        else if ( descuento.value < 100) {
            precio.innerHTML = ((producto.value) * (100 - descuento.value)) / 100;
        }
    }
    else if ( cupon && producto.value) {
        
        if(cupon != 'PLATZI20' && cupon != 'PLATZI50'){
            precio.innerHTML = 'el cupon no es valido';
            return;
        }
        else if(cupon == 'PLATZI20') {
            precio.innerHTML = ((producto.value) * (80)) / 100;
            return;
        }
        else if(cupon == 'PLATZI50') {
            precio.innerHTML = ((producto.value) * (50)) / 100;
            return;
        }
    }

};



    

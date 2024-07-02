// CUADRADO

const calcularCuadrado = document.getElementById('calcular-cuadrado');
const inputCuadrado = document.getElementById('input-cuadrado');



calcularCuadrado.addEventListener('click', calculoCuadrado);

function calculoCuadrado() {
    document.getElementById('perimetroCuadrado').innerHTML = inputCuadrado.value * 4;

    document.getElementById('areaCuadrado').innerHTML = inputCuadrado.value**2;
}

// TRIANGULO

const calcularTriangulo = document.getElementById('calcular-triangulo');
const inputTri1 = document.getElementById('lado1');
const inputTri2 = document.getElementById('lado2');
const inputTri3 = document.getElementById('base');

calcularTriangulo.addEventListener('click', calculoTriangulo);

function calculoTriangulo() {

    if (Number(inputTri1.value) === Number(inputTri2.value) && inputTri1.value != inputTri3.value) {
        document.getElementById('alturaTriangulo').innerHTML = Math.sqrt(Number(inputTri1.value)**2 - (Number(inputTri3.value)**2) / 4).toFixed(2);
    }
   
    document.getElementById('perimetroTriangulo').innerHTML = Number(inputTri1.value) + Number(inputTri2.value) + Number(inputTri3.value);

    const s = (Number(inputTri1.value) + Number(inputTri2.value) + Number(inputTri3.value)) / 2;

    document.getElementById('areaTriangulo').innerHTML = 
    Math.sqrt(s*(s-Number(inputTri1.value))*(s-Number(inputTri2.value))*(s-Number(inputTri3.value))).toFixed(2);
}

// CIRCULO

const calcularCirculo = document.getElementById('calcular-circulo');
const inputCirculo = document.getElementById('radio');

calcularCirculo.addEventListener('click', calculoCirculo);

function calculoCirculo() {

    document.getElementById('perimetroCirculo').innerHTML = (2 * Math.PI * Number(inputCirculo.value)).toFixed(2);

    document.getElementById('areaCirculo').innerHTML = (Math.PI * Number(inputCirculo.value)**2).toFixed(2);

}
    














const calcularCuadrado = document.getElementById('calcular-cuadrado');
const inputCuadrado = document.getElementById('input-cuadrado');



calcularCuadrado.addEventListener('click', calculoCuadrado);

function calculoCuadrado() {
    document.getElementById('perimetroCuadrado').innerHTML = inputCuadrado.value * 4;

    document.getElementById('areaCuadrado').innerHTML = inputCuadrado.value**2;
}













// Calcular el perimetro de un cuadrado

function perimetroCuadrado(l) {
    return l*4;
}

// Calcular el area de un cuadrado

function areaCuadrado(l) {
    return l**2;
}

// Calcular perímetro de un triangulo

function perimetroTriangulo(l1, l2, base) {
    return l1 + l2 + base;
}

// Calcular area de un triangulo

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
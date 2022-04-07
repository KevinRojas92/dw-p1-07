'use strict';

var numero1, numero2, resultado;

function obtenerNumero1(){

    do {
        var pedirNum = parseInt(prompt('Ingrese un número'));
    } while (isNaN(pedirNum));

    numero1 = pedirNum;
}

function obtenerNumero2(){

    do {
        var pedirNum = parseInt(prompt('Ingrese otro número'));
    } while (isNaN(pedirNum));

    numero2 = pedirNum;
}

function operacion(op){

    switch(op){
        case "sumar":
            sumar(numero1, numero2);
            break;

        case "restar":
            restar(numero1, numero2);
            break;

        case "multiplicar":
            multiplicar(numero1, numero2);
            break;

        case "dividir":
            dividir(numero1, numero2);
            break;

        default:
            break;
    }
}

function sumar(numero1, numero2){
    resultado = numero1 + numero2;
}

function restar(numero1, numero2){
    resultado = numero1 - numero2;
}

function multiplicar(numero1, numero2){
    resultado = numero1 * numero2;
}

function dividir(numero1, numero2){
    resultado = numero1 / numero2;
}

function mostrar(){
    alert(resultado);
}
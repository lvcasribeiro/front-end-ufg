// Realize um programa em JavaScript que mostre a tabuada de um determinado número. O programa irá pedir um número e ao final, irá mostrar o cálculo completo da tabuada do mesmo.

function gerarTabuada(num) {
    let resultado = '';

    for (let i = 1; i <= 10; i++) {
        resultado += `${num} x ${i} = ${num * i}\n`;
    }

    return resultado;
}

let numero = parseInt(prompt('Digite um número: '));
let tabuada = gerarTabuada(numero);

alert(tabuada);
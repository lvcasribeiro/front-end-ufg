// Realize um programa em JavaScript que calculará se o valor informado será par ou ímpar. O programa irá pedir um número e ao final, irá mostrar o seguinte resultado: O número <número_informado> que foi digitado é <par_ou_impar>!

function parOuImpar(num) {
    if (num % 2 === 0){
        return 'par';
    } else {
        return 'ímpar';
    }
}

let numero = parseInt(prompt('Digite um número: '));
let resultado = `O número ${numero} é ${parOuImpar(numero)}!`

alert(resultado);
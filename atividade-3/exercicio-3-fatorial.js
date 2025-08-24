// Realize um programa em JavaScript que calcule o fatorial de um número. O programa irá pedir um número e irá mostrar o resultado do seu fatorial na tela.

function fatorial(num) {
    let fatorial = 1;

    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }

    return fatorial;
}

let numero = parseInt(prompt('Digite um número: '));
let resultado = `O fatorial de ${numero} é igual a ${fatorial(numero)}.`;

alert(resultado)
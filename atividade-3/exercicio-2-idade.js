// Realize um programa em JavaScript que calcule uma idade qualquer. O programa irá pedir o ano de nascimento e ao final, irá mostrar o seguinte resultado: Quem nasceu em <ano de nascimento> irá completar <X anos> anos em 2024.

function anoNascimento(ano) {
    idade = 2024 - ano;

    return idade;
}

let ano = parseInt(prompt('Ano de nascimento:'));
let resultado = `Quem nasceu em ${ano} irá completar ${anoNascimento(ano)} anos em 2024.`;

alert(resultado);
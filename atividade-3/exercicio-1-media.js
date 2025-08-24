// Realize um programa em JavaScript que calcule e média de um aluno. O programa irá pedir o nome do aluno, o nome da disciplina, a nota 1, a nota 2 e ao final, irá mostrar o seguinte resultado: nome do aluno, disciplina, nota 1, nota 2 e média das notas.

function mediaAritmetica(nota1, nota2) {
    let mediaFinal = (nota1 + nota2) / 2;

    return mediaFinal.toFixed(2);
}

let nome = prompt('Nome do aluno:');
let disciplina = prompt('Nome da disciplina:');
let nota1 = parseFloat(prompt('Primeira nota:'));
let nota2 = parseFloat(prompt('Segunda nota:'));

let resultado = `
Aluno: ${nome}
Disciplina: ${disciplina}
Nota 1: ${nota1}
Nota 2: ${nota2}
Média: ${mediaAritmetica(nota1, nota2)}
`;

alert(resultado);
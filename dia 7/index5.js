/*Exercício 6: Cadastro de Alunos em Cursos
Desenvolva um algoritmo que receba a nota e o curso de um aluno (Matemática, História, Física), 
usando a estrutura while, e pergunte ao usuário se ele deseja cadastrar outro aluno.
No final, exiba no console:

A média das notas dos alunos.
Quantos alunos do curso de Matemática foram cadastrados.
Quantos alunos do curso de História têm nota acima de 8.
A maior nota entre os alunos do curso de Física.*/


// CRIANDO VARIAVÉIS

let totalAlunos = 0;
let somaNotas = 0;
let mediaNotas = 0;
let qtdeAlunosMatematica = 0;
let qtdeAlunosHisNota = 0;
let cadastrarAluno = true;
let MaiorNotafisica = 0;

while (cadastrarAluno) {
    let nota = parseInt(prompt("Insira sua nota (0 a 10):"));
    let curso = prompt("Qual é o seu curso? (Matemática, História, Física)");

    totalAlunos++;
    somaNotas += nota; // Adiciona a nota à soma total

    if (curso.toLowerCase() === "matemática") {
        qtdeAlunosMatematica++;
    }

    if (curso.toLowerCase() === "história" && nota >= 8) {
        qtdeAlunosHisNota++;
    }

    if (curso.toLowerCase() === "física") {
        if (nota > MaiorNotafisica) {
            MaiorNotafisica = nota;
        }
    }

    cadastrarAluno = confirm("Deseja cadastrar outro aluno?");
}

mediaNotas = somaNotas / totalAlunos; // Calcula a média das notas

console.log("Quantidade de alunos cadastrados:", totalAlunos);
console.log("Quantidade de alunos de Matemática:", qtdeAlunosMatematica);
console.log("Quantidade de alunos de História com nota maior que 8:", qtdeAlunosHisNota);
console.log("Maior nota em Física:", MaiorNotafisica);
console.log("Média das notas dos alunos:", mediaNotas.toFixed(2));


// CRIANDO VÁRIAVEIS 
let totalNotas = 0;
let totalAlunos = 0;
let totalHomens = 0;
let totalMulheresAcimaDe7 = 0;
let maiorNotaHomens = 0;
let continuarCadastro = true;

// NOTA, SEXO
while (continuarCadastro) {
    let nota = parseFloat(prompt("Digite a nota do aluno:"));
    let sexo = prompt("Digite o sexo do aluno (M/F):").toUpperCase();

    totalNotas += nota;
    totalAlunos++;

    if (sexo === "M") {
        totalHomens++;
        if (nota > maiorNotaHomens) {
            maiorNotaHomens = nota;
        }
    } else if (sexo === "F" && nota > 7) {
        totalMulheresAcimaDe7++;
    }

    let resposta = prompt("Deseja cadastrar outra nota? (S/N)").toUpperCase();
    continuarCadastro = resposta === 'S';
}

let mediaGeral = totalNotas / totalAlunos;

console.log("A média geral dos alunos é: " + mediaGeral.toFixed(2));
console.log("Quantidade de homens cadastrados: " + totalHomens);
console.log("Quantidade de mulheres com nota acima de 7: " + totalMulheresAcimaDe7);
console.log("Maior nota entre os homens: " + maiorNotaHomens);

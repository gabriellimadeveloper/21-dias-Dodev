/*Exercício 5: Cadastro de Pacientes
Desenvolva um algoritmo que receba a idade e o sexo de um paciente, 
usando a estrutura while, e pergunte ao usuário se ele deseja cadastrar outro paciente.
No final, exiba no console:

A média das idades dos pacientes.
Quantos pacientes do sexo masculino foram cadastrados.
Quantas pacientes do sexo feminino têm idade abaixo de 18.
A maior idade entre os pacientes do sexo masculino.*/

let totalPacientes = 0;
let somaIdadesPacientes = 0;
let qntdMasculinosCadastrados = 0;
let pacientesMulheresAbaixoDe18 = 0;
let maiorIdadePacientesHomens = 0;
let continuarCadastro = true;

while (continuarCadastro) {
    let idade = parseInt(prompt("Insira sua idade"));
    let sexo = prompt("Insira seu sexo: Digite M/F").toUpperCase();

    somaIdadesPacientes += idade;
    totalPacientes++;

    if (sexo === "M") {
        qntdMasculinosCadastrados++;
        if (idade > maiorIdadePacientesHomens) {
            maiorIdadePacientesHomens = idade;
        }
    } else if (sexo === "F" && idade < 18) {
        pacientesMulheresAbaixoDe18++;
    }

    let resposta = prompt("Deseja cadastrar outro paciente? (S/N)").toUpperCase();
    continuarCadastro = resposta === 'S';
}

let mediaIdadePacientes = totalPacientes > 0 ? somaIdadesPacientes / totalPacientes : 0;

console.log("Média de idade dos pacientes:", mediaIdadePacientes);
console.log("Quantidade de pacientes masculinos cadastrados:", qntdMasculinosCadastrados);
console.log("Quantidade de pacientes mulheres abaixo de 18 anos:", pacientesMulheresAbaixoDe18);
console.log("Maior idade entre os pacientes homens:", maiorIdadePacientesHomens);

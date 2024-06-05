/*Exercício 2: Cadastro de Funcionários
Desenvolva um algoritmo que receba o salário e o departamento de um funcionário,
usando a estrutura while, e pergunte ao usuário se ele deseja cadastrar outro funcionário. 
No final, exiba no console:

A média dos salários dos funcionários.
Quantos funcionários do departamento 'TI' foram cadastrados.
Quantos funcionários do departamento 'RH' têm salário acima de 5000.
O maior salário entre os funcionários do departamento 'Financeiro'*/

//CRIANDO VARIAVÉIS

let totalSalarios = 0;
let mediaSalarios = 0;
let totalFuncionarios = 0;
let qntdFuncionariosTi = 0;
let qntdFuncionariosRH = 0;
let maiorSalarioFinanceiro = 0;
let cadastrarOutroF = true;

while (cadastrarOutroF) {
    let salario = Number(prompt("Quanto você recebe de salário?"));
    let departamento = prompt("Qual é o seu departamento? (RH), (TI), (Financeiro)");

    totalSalarios += salario;
    totalFuncionarios++;

    if (departamento.toLowerCase() === "ti") {
        qntdFuncionariosTi++;
    }
    if (departamento.toLowerCase() === "rh" && salario >= 5000) {
        qntdFuncionariosRH++;
    }

    if (departamento.toLowerCase() === "financeiro") {
        if (salario > maiorSalarioFinanceiro) {
            maiorSalarioFinanceiro = salario;
        }
    }

    cadastrarOutroF = confirm("Deseja cadastrar outro funcionário?");
}

if (totalFuncionarios > 0) {
    mediaSalarios = totalSalarios / totalFuncionarios;
}

console.log("Média dos salários: " + mediaSalarios);
console.log("Quantidade de funcionários de TI: " + qntdFuncionariosTi);
console.log("Quantidade de funcionários de RH com salário maior que 5000: " + qntdFuncionariosRH);
console.log("Maior salário do departamento Financeiro: " + maiorSalarioFinanceiro);

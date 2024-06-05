/*Exercício 4: Cadastro de Veículos
Desenvolva um algoritmo que receba o ano e o tipo de um veículo (carro, moto, caminhão), 
usando a estrutura while, e pergunte ao usuário se ele deseja cadastrar outro veículo.
No final, exiba no console:

A média dos anos dos veículos.
Quantos veículos do tipo 'carro' foram cadastrados.
Quantos veículos do tipo 'moto' são do ano 2010 ou posterior.
O veículo mais antigo do tipo 'caminhão'.*/

//CRIANDO VARIÁVEIS:

let continuarCadastrando = true;
let somaAnoVeiculos = 0;
let qntVeiculosTipoCarro = 0;
let qntVeiculosTipoMoto2010 = 0;
let anoMaisAntigoCaminhao = Infinity;

while (continuarCadastrando) {
    let ano = Number(prompt("Insira o ano do veículo:"));
    let tipoVeiculo = prompt("Insira o tipo do veículo (carro, moto, caminhão):").toLowerCase();

    // Calcula a média dos anos dos veículos
    somaAnoVeiculos += ano;

    // Conta o número de veículos do tipo 'carro'
    if (tipoVeiculo === "carro") {
        qntVeiculosTipoCarro++;
    }

    // Conta o número de veículos do tipo 'moto' com ano 2010 ou posterior
    if (tipoVeiculo === "moto" && ano >= 2010) {
        qntVeiculosTipoMoto2010++;
    }

    // Rastreia o ano mais antigo do tipo 'caminhão'
    if (tipoVeiculo === "caminhão" && ano < anoMaisAntigoCaminhao) {
        anoMaisAntigoCaminhao = ano;
    }

    continuarCadastrando = confirm("Deseja cadastrar outro veículo?");
}



console.log(`A média dos anos dos veículos é: ${mediaAnoVeiculos.toFixed(2)}`);
console.log(`Quantidade de carros cadastrados: ${qntVeiculosTipoCarro}`);
console.log(`Quantidade de motos do ano 2010 ou posterior: ${qntVeiculosTipoMoto2010}`);
console.log(`O veículo mais antigo do tipo caminhão é do ano: ${anoMaisAntigoCaminhao}`);

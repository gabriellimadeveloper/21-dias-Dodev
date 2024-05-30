let saldo = 1000; // Inicializa o saldo com um valor inicial
let maiorValorInserido = 0;
let totalValores = 0;
let quantidadeValores = 0;
let continuar = true;

do {
    let nome = prompt("Digite seu nome:");
    let cpf = prompt("Digite seu CPF:");
    let valor = parseFloat(prompt("Digite o valor desejado:"));

    if (valor < 0) {
        console.log("Valor inválido. Insira um valor positivo.");
        continue;
    }

    let opcao = parseInt(prompt("Escolha uma opção:\n1 - Saque\n2 - Depósito"));

    switch (opcao) {
        case 1:
            if (valor > saldo) {
                console.log("Saldo insuficiente. Operação de saque cancelada.");
                continue;
            }
            saldo -= valor;
            break;
        case 2:
            saldo += valor;
            break;
        default:
            console.log("Opção inválida.");
            continue;
    }

    if (valor > maiorValorInserido) {
        maiorValorInserido = valor;
    }

    totalValores += valor;
    quantidadeValores++;

    let continuarInput = parseInt(prompt("Deseja continuar?\n1 - Sim\n2 - Não"));
    continuar = continuarInput === 1;

} while (continuar);

let mediaValores = totalValores / quantidadeValores;

console.log("Saldo total: " + saldo.toFixed(2));
console.log("Maior valor inserido: " + maiorValorInserido.toFixed(2));
console.log("Média dos valores inseridos: " + mediaValores.toFixed(2));

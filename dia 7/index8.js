/*Gerenciamento de Contas Bancárias:

Solicite o nome do cliente e seu saldo inicial.
Permita ao usuário escolher entre realizar depósitos ou saques.
Verifique se o saldo é suficiente para saques e se os valores inseridos são positivos.
Exiba o saldo total e o maior valor transacionado.*/


let saldo = {};
let maiorValorTransacionado = 0;

do {
    let nomeCliente = prompt("Insira seu nome: ");
    let saldoInicial = parseInt(prompt("Insira seu saldo inicial: "));
    
    if (saldoInicial < 0 || isNaN(saldoInicial)) {
        alert("O saldo inicial deve ser um número positivo. Por favor, insira um valor válido.");
        continue; // Volta para o início do loop para pedir as informações novamente
    }

    saldo[nomeCliente] = saldoInicial;

    let operacao = prompt("Deseja realizar um Depósito ou Saque? Digite (saque) ou (depósito):");

    if (operacao.toLowerCase() === "depósito") {
        let deposito = parseInt(prompt("Quanto deseja depositar?"));
        if (deposito < 0 || isNaN(deposito)) {
            alert("O valor do depósito deve ser um número positivo. Por favor, insira um valor válido.");
            continue; // Volta para o início do loop para pedir as informações novamente
        }
        saldo[nomeCliente] += deposito;
        if (deposito > maiorValorTransacionado) {
            maiorValorTransacionado = deposito;
        }
    } else if (operacao.toLowerCase() === "saque") {
        let saque = parseInt(prompt("Quanto deseja sacar?"));
        if (saque < 0 || isNaN(saque)) {
            alert("O valor do saque deve ser um número positivo. Por favor, insira um valor válido.");
            continue; // Volta para o início do loop para pedir as informações novamente
        }
        if (saldo[nomeCliente] < saque) {
            alert("Saldo insuficiente para realizar o saque.");
            continue; // Volta para o início do loop para pedir as informações novamente
        }
        saldo[nomeCliente] -= saque;
        if (saque > maiorValorTransacionado) {
            maiorValorTransacionado = saque;
        }
    } else {
        alert("Operação inválida. Por favor, escolha entre 'depósito' e 'saque'.");
        continue; // Volta para o início do loop para pedir as informações novamente
    }

    let continuar = prompt("Deseja continuar? (sim/não)");

    if (continuar.toLowerCase() !== "sim") {
        break; // Sai do loop se o usuário não quiser continuar
    }

} while (true);

// Calcula o saldo total
let saldoTotal = Object.values(saldo).reduce((acc, curr) => acc + curr, 0);

// Exibe o saldo total e o maior valor transacionado
console.log("Saldo Total:", saldoTotal);
console.log("Maior Valor Transacionado:", maiorValorTransacionado);

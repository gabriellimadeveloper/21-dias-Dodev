/*Gestão de Estoque:

Solicite o nome do produto e sua quantidade inicial em estoque.
Permita ao usuário escolher entre adicionar ou remover itens do estoque.
Verifique se a quantidade a ser removida não excede a quantidade disponível.
Exiba o estoque total e o produto com a maior quantida */

// Objeto para armazenar o estoque
let estoque = {};

// Loop do-while para permitir operações contínuas no estoque
do {
    // Solicitação do nome do produto e quantidade inicial
    let nomeProduto = prompt("Qual é o nome do Produto?");
    let qtdProdutoInicialEstoque = parseInt(prompt("Qual é a quantidade do produto?"));

    // Armazena o nome do produto e sua quantidade inicial no estoque
    estoque[nomeProduto] = qtdProdutoInicialEstoque;

    // Solicitação da operação a ser realizada (adicionar ou remover)
    let operacao = prompt("Deseja adicionar ou remover itens do estoque? (adicionar/remover)");

    // Verifica a operação escolhida pelo usuário
    if (operacao === "adicionar") {
        // Caso seja escolhido adicionar, solicita a quantidade a ser adicionada
        let qtdAdicionar = parseInt(prompt("Quantos itens deseja adicionar?"));
        // Atualiza o estoque adicionando a quantidade informada
        estoque[nomeProduto] += qtdAdicionar;
    } else if (operacao === "remover") {
        // Caso seja escolhido remover, solicita a quantidade a ser removida
        let qtdRemover = parseInt(prompt("Quantos itens deseja remover?"));
        // Verifica se a quantidade a ser removida não excede a disponível
        if (qtdRemover > estoque[nomeProduto]) {
            console.log("Quantidade a ser removida excede a quantidade disponível.");
        } else {
            // Atualiza o estoque removendo a quantidade informada
            estoque[nomeProduto] -= qtdRemover;
        }
    }

    // Variáveis para calcular o estoque total e o produto com a maior quantidade
    let estoqueTotal = 0;
    let produtoMaiorQuantidade = "";
    let maiorQuantidade = 0;

    // Percorre o estoque para calcular o estoque total e encontrar o produto com a maior quantidade
    for (let produto in estoque) {
        estoqueTotal += estoque[produto];
        if (estoque[produto] > maiorQuantidade) {
            produtoMaiorQuantidade = produto;
            maiorQuantidade = estoque[produto];
        }
    }

    // Exibe o estoque total e o produto com a maior quantidade
    console.log("Estoque total:", estoqueTotal);
    console.log("Produto com maior quantidade:", produtoMaiorQuantidade);

// Confirmação para continuar ou encerrar o loop
} while (confirm("Deseja continuar?"));


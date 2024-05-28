let escolha = prompt(
    "Escolha entre essas 3 opções:\n" +
    "1º Abastecer com gasolina digite: gasolina\n" +
    "2º Abastecer com álcool digite: álcool\n" +
    "3º Calibrar pneus digite: calibrar"
);


switch (escolha) {
    case "gasolina":
        let litros = prompt("Você deseja abastecer com quantos litros de gasolina? Valor do litro R$5");
        let valorTotal = litros * 5;
        console.log("O valor total a pagar é: R$" + valorTotal.toFixed(2));
        break;
    case "álcool":
        let litrosalcool = prompt("Você deseja abastecer com quantos litros de álcool? Valor do litro R$3");
        let valorTotalalcool = litrosalcool * 3;
        console.log("O valor total a pagar é: R$" + valorTotalalcool.toFixed(2));
        break;
    case "calibrar":
        console.log("pneus calibrados com sucesso.");
        break;
    default:
        console.log("Opção inválida.");
}

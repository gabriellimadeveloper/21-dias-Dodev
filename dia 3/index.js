let nome = prompt("Insira seu nome: ");
console.log("Olá "  +nome);

let idade = Number(prompt("Insira sua idade: "));
console.log( "tenho " +idade +" anos");

let ano = 2023 - idade;

let altura = parseFloat(prompt("Insira sua altura"));
console.log("minha altura é " +altura  +" Metros");

let peso = Number(prompt("Insira seu peso"));
console.log("meu Peso é " +peso);


let Imc = peso / (altura*altura);
let ImcFormatado = Imc.toFixed(2);
console.log(Imc + ImcFormatado + " kg/m²");

console.log ("Olá "+nome, "tenho " +idade + " anos","Nasci em " +ano, "meu Peso é " +peso +"KG", "meu IMC é " +ImcFormatado + "kg/m²")
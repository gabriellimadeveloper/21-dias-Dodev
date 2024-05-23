let nome = prompt("Insira seu nome: ")
let idade = Number(prompt("Insira sua idade: "))
let habilitacao = prompt("Possui carteira de motorista? (sim/não) ")
let carro = prompt("Possui carro? (sim/não)")

if(idade <= 18 || habilitacao !== "sim"){
    console.log(nome + ", você não pode dirigir!")
}else if( habilitacao === "sim" && carro === "não"){
      console.log(nome +", você pode dirigir mais não tem carro")
}else if( habilitacao !== "não" && carro === "sim"){
    console.log(nome  +", você será o motorista!")

}
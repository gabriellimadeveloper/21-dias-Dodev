let numero1 = Number(prompt("Insira o primeiro número:"))
let operacao= prompt ("Qual operação matemática deseja realizar? (*),(+),(/)")
let numero2 = Number(prompt("Insira o segundo número"))


let multiplicao = "*"
let adicao = "+"
let divisao = "/"


switch(operacao){
    case multiplicao:
    console.log ("o resultado da operação é " +(numero1 * numero2))
    break
    case adicao:
    console.log("O resultado da operação é " +(numero1 + numero2))
    break
    case divisao:
    console.log("o resultado da operação é "+(numero1 / numero2))
    break

}
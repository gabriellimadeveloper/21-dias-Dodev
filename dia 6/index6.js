//Tabuada de um Número
//Enunciado: Peça ao usuário um número e imprima a tabuada desse número (de 1 a 10).

let tabuada = Number(prompt("Insira um número")); // Pede ao usuário um número

for (let i = 1; i <= 10; i++) { // Corrigido: i começa em 1 e vai até 10, com incremento de 1
    let multiplicacao = tabuada * i; // Corrigido: multiplicação correta para tabuada
    console.log(`${tabuada} x ${i} = ${multiplicacao}`); // Exibe o resultado da multiplicação
}

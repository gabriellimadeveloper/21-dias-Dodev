let numero = Number(prompt("Insira um número")); // Pede ao usuário um número

for (let i = 0; i < 3; i++) { // Itera 3 vezes para o número e os dois próximos
    let numAtual = numero + i; // Calcula o número atual (numero, numero+1, numero+2)
    console.log(`Número ${numAtual}:`); // Exibe o cabeçalho para o número atual
    
    for (let j = 1; j <= 10; j++) { // Itera de 1 a 10 para a tabuada
        let multiplicacao = numAtual * j; // Calcula a multiplicação
        console.log(`${numAtual} x ${j} = ${multiplicacao}`); // Exibe o resultado da multiplicação
    }
    
    console.log(''); // Linha em branco para separar as tabuadas
}

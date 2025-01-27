function fibonacci(num) {
    let a = 0, b = 1;

    while (a <= num) {
        if (a === num) {
            return `O número ${num} pertence à sequência de Fibonacci`;
        }
        [a, b] = [b, a + b];
    }
    return `O número ${num} não pertence à sequência de Fibonacci`;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe um número: ", (input) => {
    const numero = parseInt(input, 10);

    if (isNaN(numero)) {
        console.log("Insira um número válido");
    } else {
        console.log(fibonacci(numero));
    }
    rl.close();
});

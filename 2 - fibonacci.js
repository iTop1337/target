function fibonacci(num) {
    let a = 0, b = 1;

    while (a <= num) {
        if (a === num) {
            return 'O numero ${num} pertence a sequencia de Fibonacci';
        }
        [a, b] = [b, a + b]
    }
    return 'O numero ${num} não pertence a sequencia de Fibonacci';
}

const numero = parseInt(prompt("Informe um número: "), 10); // Solicita um número ao usuário
console.log(pertenceFibonacci(numero));
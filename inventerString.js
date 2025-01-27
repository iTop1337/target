const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

rl.question('Informe uma string para inverter: ', (input) => {
    const stringInvertida = inverterString(input);
    console.log('String invertida:', stringInvertida);
    rl.close();
});

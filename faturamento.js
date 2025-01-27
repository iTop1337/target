const fs = require('fs');

fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo JSON:", err);
        return;
    }

    if (!data) {
        console.error("O arquivo JSON está vazio.");
        return;
    }

    try {
        const faturamentoDiario = JSON.parse(data);

        function calcularFaturamento(faturamento) {
            let menorFaturamento = Infinity;
            let maiorFaturamento = -Infinity;
            let somaFaturamento = 0;
            let diasComFaturamento = 0;

            for (let i = 0; i < faturamento.length; i++) {
                if (faturamento[i] !== null) {
                    somaFaturamento += faturamento[i];
                    diasComFaturamento++;
                    if (faturamento[i] < menorFaturamento) menorFaturamento = faturamento[i];
                    if (faturamento[i] > maiorFaturamento) maiorFaturamento = faturamento[i];
                }
            }

            const mediaFaturamento = somaFaturamento / diasComFaturamento;

            let diasAcimaMedia = 0;
            for (let i = 0; i < faturamento.length; i++) {
                if (faturamento[i] !== null && faturamento[i] > mediaFaturamento) {
                    diasAcimaMedia++;
                }
            }

            return {
                menorFaturamento,
                maiorFaturamento,
                diasAcimaMedia,
                mediaFaturamento
            };
        }

        const resultado = calcularFaturamento(faturamentoDiario);
        console.log(`Menor faturamento: R$${resultado.menorFaturamento}`);
        console.log(`Maior faturamento: R$${resultado.maiorFaturamento}`);
        console.log(`Número de dias com faturamento superior à média: ${resultado.diasAcimaMedia}`);
        console.log(`Média de faturamento diário: R$${resultado.mediaFaturamento.toFixed(2)}`);

    } catch (parseErr) {
        console.error("Erro ao parsear o JSON:", parseErr);
    }
});

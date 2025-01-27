const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcularPercentuais(faturamento) {
    const totalFaturamento = Object.values(faturamento).reduce((total, valor) => total + valor, 0);
    
    for (const estado in faturamento) {
        const percentual = (faturamento[estado] / totalFaturamento) * 100;
        console.log(`Percentual de ${estado}: ${percentual.toFixed(2)}%`);
    }
}

calcularPercentuais(faturamentoEstados);

// Aplicação Financeira

// const aplicacaoFinanceira = (investimento, taxaJuros, anosInvestidos) =>{
//     for(let i = 1; i<=anosInvestidos; i++){
//         investimento += investimento * taxaJuros;
//         console.log("Ano: " +i +" | R$" +investimento.toFixed(2));
//     }
// }

// aplicacaoFinanceira(1000,0.12,10);

// aplicacaoFinanceira(1000);

const aplicacaoFinanceira = (investimento) =>{
    let anoAtual = 2025;
    for(let i = anoAtual; i < 2035; i++){
        investimento = investimento * 1.12;
        console.log("Ano: " +i +" | R$" +investimento.toFixed(2));
    }

}
aplicacaoFinanceira(1000);
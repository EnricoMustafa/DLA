// Aplicação Financeira

const aplicacaoFinanceira = (investimento) =>{
    let anoAtual = 2025;
    for(i = anoAtual; i<=2035; i++){
        investimento = investimento * 1.12;
        console.log("Ano: " +i +" | R$" +investimento.toFixed(2));
    }

}
aplicacaoFinanceira(1000);
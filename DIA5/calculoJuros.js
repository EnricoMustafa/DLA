// Calculo de juros
let ano = 0;
let investimento = 100;

while(ano <= 20){
    ano++;
    investimento = investimento * 1.05;

    if(investimento >= 200){
        console.log("O investimento dobrou aqui e levou " + ano +" anos")
    }

    console.log("O investimento rendeu: " +"R$"+investimento.toFixed(2));
}
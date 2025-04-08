//Rendimento de aplicação financeira

let investimento = 1000; 
let ano = 2025;

for(i = ano; i<=2035; i++){
    investimento = investimento * 1.12;
    console.log("Ano: "+i +" | R$"+investimento.toFixed(2));
}
// compra parcelada

let valorTotal = 1000;
let numeroParcelas = 12
let valorparcelas = valorTotal/numeroParcelas;
let valorRestante = valorTotal;
let mes = 1;

while(mes <= numeroParcelas){
    valorRestante = valorRestante - valorparcelas;
    console.log("O valor do mes a se pagar é: R$"+valorparcelas.toFixed(2)+" e o valor restante é: R$"+valorRestante.toFixed(2));
    mes++;
}

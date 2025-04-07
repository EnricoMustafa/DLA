console.log("------------------------- B O N U S ------------------------- \n")

// verificar se é impar ou par

let numero = 2;

if(numero % 2 === 0) {
    console.log("O numero digitado foi: "+numero+" e esse numero é par")
}else{
    console.log("O numero digitado foi: "+numero+" e esse numero é impar")
}

console.log("----------------------------------------------------- \n");

// IMC

let altura = 1.78 ** 2;
let massa = 78;
let IMC = massa / altura;

IMC <= 18.5 ? console.log("Abaixo do normal") :
IMC <= 24.9 ? console.log("normal") :
IMC <= 29.9 ? console.log("sobrepeso") :
IMC <= 34.9 ? console.log("obesidade grau 2") : console.log("Obesidade Grau 3");

console.log("seu imc é: " +IMC.toFixed(2));

console.log("----------------------------------------------------- \n");

//Viagem de carro

// 12km por litro 
const distanciaVIagemKM = 12;
let km = 12;
let precoGasolina = 6;
let qntLitrosPordistancia = Math.floor(distanciaVIagemKM/km);
let valorAsePagar = qntLitrosPordistancia * precoGasolina;
let qntslitros = 50;

console.log("O carro vai precisar de "+ qntLitrosPordistancia+ " litros para viajar " + distanciaVIagemKM+"Km");
console.log("O valor a se pagar por gasolina é de: R$" + valorAsePagar+",00");


console.log("----------------------------------------------------- \n");


//IMC com função
const cacularImc = (peso,altura) => {
    const imc = peso/(altura**2);
    imc <= 18.5 ? console.log("Abaixo do normal") :
    imc <= 24.9 ? console.log("normal") :
    imc <= 29.9 ? console.log("sobrepeso") :
    imc <= 34.9 ? console.log("obesidade grau 2") : console.log("Obesidade Grau 3");
    return imc;
}
console.log(cacularImc(82,1.78).toFixed(2))

//IMC com função

function cacularImc(altura,peso) {
    return peso/altura**2
}

console.log("O imc é: "+ cacularImc(82,1.78).toFixed(2))
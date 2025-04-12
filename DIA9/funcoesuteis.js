//recrie funções uteis em array

let carros2010 = [
    "fiat strada",
    "chevrolet onix",
    "volkswagen gol",
    "toyota corolla",
    "honda civic",
    "ford ka",
    "renault kwid",
    "hyundai hb20",
    "peugeot 208",
    "nissan versa"
]

function selecionarTopCinco(){
    return console.log("Os carros Top 5 são: "+carros2010.slice(0,5).join(", "));
}

selecionarTopCinco();
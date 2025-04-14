//Controle de navgeção em navegadores web
//Melhorar codigo

let voltar = []
let avancar = []

function voltarNavegacao(acao){
    voltar.push(acao);
    avancar.pop();
    console.log("Voltou a tela");
}

function avancarNavegacao(acao){
    avancar.push(acao);
    console.log("Avançou a tela");
}

function mudouEndereco(acao){
    avancar = []
    avancar.push(acao);
    console.log("Avançou a tela em um novo endereço");
}

avancarNavegacao("avançou");
avancarNavegacao("avançou");
avancarNavegacao("avançou");
console.log(avancar);
voltarNavegacao("Voltou");
console.log(avancar);
console.log(voltar);
mudouEndereco("avancou")
console.log(avancar);
mudouEndereco("avancou")
console.log(avancar);

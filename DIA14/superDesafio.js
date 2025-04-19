//SUPER DESAFIO  controlar filas de varios caixas de supermercado
let filasCaixas = {
    caixa1: [],
    caixa2: [],
    caixa3: [],
    caixa4: [],
    caixa5: [],
    caixa6: [],
    caixa7: [],
    caixa8: [],
    caixa9: [],
    caixa10: []
}

function entrarNaFila(caixa, nome) {
    if (filasCaixas[caixa]) {
        filasCaixas[caixa][filasCaixas[caixa].length] = nome; 
        console.log(`${nome} entrou na fila do ${caixa}.`);
    } else {
        console.log(`O ${caixa} não existe.`);
    }
}

function foiAtendido(caixa) {
    if (filasCaixas[caixa] && filasCaixas[caixa].length > 0){
        let clienteAtendido = filasCaixas[caixa][0];
        for (let i = 1; i < filasCaixas[caixa].length; i++){
            filasCaixas[caixa][i-1] = filasCaixas[caixa][i]
        }
        filasCaixas[caixa].length -= 1;
        console.log(`${clienteAtendido} foi atendido no ${caixa}`)
    } else if (filasCaixas[caixa]){
        console.log(`A fila do ${caixa} está vazia`);
    } else {
        console.log(`O ${caixa} não existe`);
    }
}

// o in no for serve para percorrer um objeto
function mostrarFilas(){
    console.log("\nEstado das filas: ");
    for (let i in filasCaixas) {
        if (filasCaixas[i].length > 0) {
            console.log(`${i}: ${filasCaixas[i].join(', ')}`)
        }
    }
}

entrarNaFila("caixa2","Enrico");
entrarNaFila("caixa2","Mariana");
entrarNaFila("caixa9","luisa");
entrarNaFila("caixa10","bianca");
entrarNaFila("caixa3","ikon");
entrarNaFila("caixa2","cheila");
entrarNaFila("caixa1","Pedro");
entrarNaFila("caixa1","João");
entrarNaFila("caixa4","Paulo");
entrarNaFila("caixa2","Antopnio");
entrarNaFila("caixa7","Guilherme");

mostrarFilas();

foiAtendido("caixa7");
foiAtendido("caixa2");
foiAtendido("caixa4");
foiAtendido("caixa2");

mostrarFilas();
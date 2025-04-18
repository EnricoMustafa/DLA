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

function entrarNaFila(caixa,nomeCliente){
    if(filasCaixas[caixa]){
        filasCaixas[caixa][filasCaixas[caixa].lenght] = nomeCliente;
        console.log(`O ${nomeCliente} entrou na fila do ${caixa}`);
    } else{
        console.log(`O ${caixa} não existe`);
    }
}

function foiAtendido(caixa){
    
    if(caixa == 1){
        caixa1.shift()
        console.log(`O cliente foi atendido no caixa: caixa ${caixa}`);
        console.log(caixa1);
    }else if(caixa == 2){
        caixa2.shift()
        console.log(`O cliente foi atendido no caixa: caixa ${caixa}`);
        console.log(caixa2);
    }else if(caixa == 3){
        caixa3.shift()
        console.log(`O cliente foi atendido no caixa: caixa ${caixa}`);
        console.log(caixa3);
    }else if(caixa == 4){
        caixa4.shift() 
        console.log(`O cliente foi atendido no caixa: caixa ${caixa}`);
        console.log(caixa4);
    }else if(caixa == 5 ){
        caixa5.shift()
        console.log(`O cliente foi atendido no caixa: caixa ${caixa}`);
        console.log(caixa5);
    }else{
        console.log("Esse caixa não existe");
    }

}

// o in no for serve para percorrer um objeto
function mostrarCaixa(){
    for(let caixas in filasCaixas){
        console.log(caixas);
        console.log(filasCaixas[caixas])
    }
}

entrarNaFila("caixa2","Enrico");
mostrarCaixa()
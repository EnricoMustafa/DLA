//SUPER DESAFIO  controlar filas de varios caixas de supermercado
let caixa1 = [];
let caixa2 = [];
let caixa3 = [];
let caixa4 = [];
let caixa5 = [];

function entrarNaFila(caixa,nomeCliente){
    caixa == 1 ? caixa1.push(nomeCliente) :
    caixa == 2 ? caixa2.push(nomeCliente) :
    caixa == 3 ? caixa3.push(nomeCliente) :
    caixa == 4 ? caixa2.push(nomeCliente) :
    caixa == 5 ? caixa2.push(nomeCliente) :
    console.log("Não foi possivel entrar na fila")

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

function mostrarCaixa(caixa){
    caixa == 1 ? console.log("caixa 1 "+caixa1) :
    caixa == 2 ? console.log("caixa 2 "+caixa2) :
    caixa == 3 ? console.log("caixa 3 "+caixa3) :
    caixa == 4 ? console.log("caixa 4 "+caixa4) :
    caixa == 5 ? console.log("caixa 5 "+caixa5) :
    console.log("Caixa não reconhecido")
}

entrarNaFila(2,"Enrico");
entrarNaFila(2,"Bia");
entrarNaFila(2,"José");
mostrarCaixa(2);
mostrarCaixa(1);
mostrarCaixa(4);
mostrarCaixa(3);
foiAtendido(9);
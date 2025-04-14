//Braço mecanico para empilhar produtos

let caixa1 = [];
let caixa2 = [];
let caixa3 = [];

function adicionarProduto(caixa, produto){
    let nomeCaixa;
    if(caixa == 1){
        nomeCaixa = "caixa1";
        caixa1.push(produto);
        console.log("Foi adicionado " +produto+ " na caixa " +nomeCaixa)
    }else if(caixa == 2){
        nomeCaixa = "caixa2";
        caixa2.push(produto);
        console.log("Foi adicionado " +produto+ " na caixa " +nomeCaixa)
    }else if(caixa == 3){
        nomeCaixa = "caixa3";
        caixa3.push(produto);
        console.log("Foi adicionado " +produto+ " na caixa " +nomeCaixa)
    }else{
        console.log("caixa não identificada")
    }
}

function verificarCaixa(){
    if(caixa1 == 0){
        console.log("caixa1 está vazia")
    }else if(caixa2 == 0){
        console.log("caixa2 está vazia")
    }else if(caixa3 == 0){
        console.log("caixa2 está vazia")
    } else{
        console.log("A caixa1: "+caixa1);
        console.log("A caixa2: "+caixa2);
        console.log("A caixa3: "+caixa3);
    }
    
}

adicionarProduto(1, "arroz")
adicionarProduto(2, "arroz")
verificarCaixa();
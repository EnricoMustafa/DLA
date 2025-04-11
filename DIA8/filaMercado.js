//fila de supermercado em codigo;
//MELHORAR O CODIGO

let filaMercado =[]

function tamanhoDaFila(){
    for(let i = 0; i < filaMercado.length; i++){
        console.log(filaMercado[i].join(", "))
    } 
}

function entrouNaFila(entrou, pessoa){
    if(entrou == true){
        console.log("Adicionado com sucesso")
        filaMercado.push(pessoa)
    }else{
        console.log("Não entrou na fila")
    }
}

function saiuDaFila(saiu){
    if(saiu == true){
        filaMercado.shift()
    } else{
        console.log("Ninguem foi atendido")
    }
    return console.log(filaMercado);
}

entrouNaFila(true,"josé");
entrouNaFila(true,"joao");
entrouNaFila(true,"Carlos");
entrouNaFila(true,"Enrico");
saiuDaFila(true);
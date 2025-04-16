// Fila de atendimento em um Drive through

/*
PRINCIPIOS:
- o cliente so pode pedir apenas um produto
- o primeiro cliente a entrar na fila é o primeiro a ser atendido
- uma função para atender
- uma função de entrada do cliente na fila
- uma função de seleção de pedidos do cliente
*/

let carros = [];
let menu = ["Hamburguer", "Sorvete", "Milk Shake"]

function filaCLientes(nomeCliente){
    carros.push(nomeCliente)
    console.log("Cliente "+nomeCliente+" entrou na fila");
    console.log(carros);
    
}

function atenderClientes(numPedido){
    if(carros.length === 0) {
        console.log("A fila está vazia, espere um cliente chegar");
    }else{
        let atendimento = carros.shift();
        console.log("Cliente sendo atendido: " +atendimento);
        console.log(carros);
    }

    if(numPedido == 1){
        console.log("O Pedido escolhido foi: " +menu[0]);
    }else if(numPedido == 2){
        console.log("O Pedido escolhido foi: " +menu[1]);
    }else if(numPedido == 3){
        console.log("O Pedido escolhido foi: " +menu[2]);
    }else{
        console.log("Numero de pedido não desconhecido");
    }
}


filaCLientes("Enrico");
filaCLientes("José");
filaCLientes("Flavia");

atenderClientes(1);
//fila de atendimento em call center 

let filaAtendimento = [];

function adicionarChamada(numeroCliente){
    filaAtendimento.push(numeroCliente);
    console.log("Cliente: " +numeroCliente + " | FILA DE ESPERA");
    console.log(filaAtendimento);
}

function atenderChamada(){
    for(let i = 0; i<filaAtendimento.length; i++){
        let cliente = filaAtendimento.shift();
        console.log("Cliente atendido com sucesso! Cliente: " +cliente);
        filaAtendimento.length === 0 ? console.log("Fila vazia") : console.log(filaAtendimento);
    }
}

adicionarChamada("99143-9495");
adicionarChamada("99143-9111");
adicionarChamada("93333-9111");

atenderChamada();
atenderChamada();
atenderChamada();
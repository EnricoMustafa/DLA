//Controle de tarefas dinamicas com prioridades

/*
1) Criar função que cria tarefa
2) Criar função que organiza por ordem de prioridade

*/

let tarefas = [];

function adicionarTarefa(tarefa, prioridade){
    let novaTarefa = {
        tarefa: tarefa,
        prioridade: prioridade
    };
    return tarefas.push(novaTarefa);
}

function ordenar(){
    const ordemPrioridade ={
        "Alta":1,
        "Media":2,
        "Baixa":3
    };

    tarefas.sort((a,b) => {
        return ordemPrioridade[a.prioridade] - ordemPrioridade[b.prioridade]
    });
}

adicionarTarefa("mudar cor do botão", "Alta");
adicionarTarefa("integrar com api", "Baixa");
adicionarTarefa("adicionar um formulario", "Media");
adicionarTarefa("adicionar um formulario", "Media");
adicionarTarefa("adicionar um formulario", "Media");
adicionarTarefa("adicionar um formulario", "Media");
adicionarTarefa("integrar com api", "Baixa");
adicionarTarefa("mudar cor do botão", "Alta");

ordenar();

console.log(tarefas);
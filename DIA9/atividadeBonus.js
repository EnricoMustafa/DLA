//verificador de array

//include buscar o elemento existente no array simples retornando true/false;
//indexOf fala a posição do elemento no array;
//lastIndexOf fala a quantidade de vezes que uma string aparece no array;

let clientes = ["Enrico"];

function adicionarCliente(nome){
   clientes.push(nome);
   console.log(clientes);
}

function acharElemento(nome){
    // const encontrou = clientes.includes(clientes => clientes.nome === nome);
    if(clientes.includes(nome)){
        console.log("Existe no array com o nome: " +nome);
    }else{
        console.log("Não existe")
    }
}

function acharPosiçãoElemento(nome){
   let posicao = clientes.indexOf(nome)
    console.log("O usuario " +nome +" Está na posicão " +posicao);
}
function ultimaOcorrencia(nome){
    console.log("Foi encontrado " + clientes.lastIndexOf(nome)+ " ocorrencias de " + nome);
}

adicionarCliente("Bia");
adicionarCliente("Bia");
adicionarCliente("Bia");
adicionarCliente("Bia");
adicionarCliente("Galvão");
adicionarCliente("Luiz");
adicionarCliente("Lopes");
adicionarCliente("Alex");
adicionarCliente("Pedro");
acharElemento("Bia");
acharPosiçãoElemento("Galvão");
ultimaOcorrencia("Bia")
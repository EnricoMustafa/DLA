//verificador de array

//include buscar o elemento existente no array simples;

let clientes = [];

function adicionarCliente(nome, sobrenome){
   clientes.push(nome, sobrenome );
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
    
}

adicionarCliente("Bia","Galvão");
adicionarCliente("Luiz","Lopes");
adicionarCliente("Alex","Pedro");
acharElemento("Bia");
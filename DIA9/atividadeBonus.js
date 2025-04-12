//verificador de array

let clientes = [{nome:"", sobrenome: ""}];

function adicionarCliente(nome, idade){
   clientes.push(nome, idade);
   return console.log(clientes);
}

function acharElemento(nome){
    if(nome.includes() == true){
        console.log("Existe no array")
    }
}

adicionarCliente({nome:"enrico", sobrenome: 22});
acharElemento("enrico");
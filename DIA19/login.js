let users = [];

function criarUsuario(email, password) {
    
    if ( email.length === 0) {
        console.log("Digite um email valido");
        return;
    }
    
    if ( password.length === 0) {
        console.log("Digite uma senha valida");
        return;
    }
    
    let data = {
        email: email,
        senha: password,
    };
    
    users.push(data);
}

function mostrarUsuarios() {
        console.log(`USUARIOS CADASTRADOS`);
    for(let i = 0; i < users.length; i++){
        console.log(`${i+1} Email: ${users[i].email}, Senha: ${users[i].senha}`);
    }
}

function verificarSenha() {
    
}


criarUsuario('enricobrasil123@gmail.com', 'Enrico123');
criarUsuario('enricobrasil123@gmail.com', 'Enrico123');

mostrarUsuarios();
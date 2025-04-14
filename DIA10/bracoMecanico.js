//Braço mecanico para empilhar produtos

let caixa =[];
const capacidadeMaxima = 10;

function adicionarProduto(produto){
    if(caixa.length < capacidadeMaxima){
        caixa.push(produto);
        console.log("Produto " +produto+ " adicionado "+caixa.join(", ") +";");
    }else{
        console.log("Caixa cheia despachada para proxima parte");
        caixa = [];
        caixa.push(produto);
        console.log("Produto "+produto+" adicionado a uma nova caixa")
    }
}


adicionarProduto("Feijão");
adicionarProduto("Arroz");
adicionarProduto("Carne");
adicionarProduto("Café");
adicionarProduto("Agua");
adicionarProduto("Chocolate");
adicionarProduto("Pão");
adicionarProduto("Filtro de café");
adicionarProduto("Queijo");
adicionarProduto("Frango");
adicionarProduto("Suco");
adicionarProduto("Frutas");


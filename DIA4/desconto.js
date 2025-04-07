//Sistema de PDV

let produto = "Livro";

switch (produto) {
    case "Livro":
        console.log("Desconto de 50%");
        break;
    case "Alimentos":
        console.log("Desconto de 5%");
        break
    case "Eletronicos":
        console.log("Desconto de 10%");
        break
    case "Roupas":
        console.log("Desconto de 20%");
    default:
        console.log("Sem desconto");
        break;
}
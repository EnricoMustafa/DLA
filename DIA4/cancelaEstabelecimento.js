//verificar o status de uma cancela com switch case

let estado = 9;

switch (estado) {
    case 1:
        console.log("Aberta");
        break;
    case 2:
        console.log("Fechada");
        break;
    default:
        console.log("Manutenção");
        break;
}
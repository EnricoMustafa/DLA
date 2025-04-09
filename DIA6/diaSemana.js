// Dia da semana por extenso

const obterDiaDaSemana = (dia) =>{
    switch (dia) {
        case 1:
            console.log("Segunda");
            break;
        case 2:
            console.log("Terça");
            break;
        case 3:
            console.log("Quarta");
            break;
        case 4:
            console.log("Quinta");
            break;
        case 5:
            console.log("Sexta");
            break;
        case 6:
            console.log("Sabado");
            break;
        case 7:
            console.log("Domingo");
            break;
    
        default:
            console.log("esse dia não existe");
            break;
    }
}

obterDiaDaSemana(1);
obterDiaDaSemana(2);
obterDiaDaSemana(3);
obterDiaDaSemana(4);
obterDiaDaSemana(5);
obterDiaDaSemana(6);
obterDiaDaSemana(6);
obterDiaDaSemana(7);
obterDiaDaSemana(8);

//Contagem regressiva para lançamento de foguete

let contagem = 10;

for(i = contagem; i >= 0; i--){
    if(i < 3){
        console.log(" ATENÇÂO ");
    }if(i <= 0) {
        console.log("Lançamento do foguete");
    }

    console.log(i)
}
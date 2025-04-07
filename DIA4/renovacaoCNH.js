//Renocação CNH 
let idade = 18;
let primeiraCnh = "Primeira";

if(idade === primeiraCnh){
    console.log("A sua CNH vence em 1 ano");
}else if(idade < 50){
    console.log("A sua CNH vence em 10 anos");
}else if(idade >= 50 || idade < 70){
    console.log("A sua CNH vence em 5 anos");
}else{
    console.log("A sua CNH vence em 3 anos");
}
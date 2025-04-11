//Super desafio Aplicação de FInanças
let conta1 = 0;
let conta2 = 0;
let limite = 0.10;
let totalContas = conta1 + conta2; //quando o saldo das duas contas chegar a 1000 o limite vira 1.1
let limiteContas = 0;

const calcularSaldoDasContas = (conta) => {
    let saldoTotal = conta1+conta2;

    if(conta == 1){
        console.log("Saldo conta1: R$" +conta1);
    } else if(conta == 2){
        console.log("Saldo conta2: R$" +conta2);
    } else if(conta == 3){
        console.log("O saldo total das contas é: R$" +saldoTotal)
    } else{
        console.log("Digite uma conta valida");
    }
    
}

const fazerDeposito = (contaOrigem, valor) => {
    if(contaOrigem == 1){
        valor = valor + conta1;
        console.log("Valor depositado na conta1: R$" + valor);
    } else if(contaOrigem == 2){
        valor = valor + conta2;
        console.log("Valor depositado na conta2: R$" + valor);
    } else if(contaOrigem != 1 || contaOrigem != 2){
        console.log("ERRO: Conta digitada: conta" +contaOrigem +" || Conta não existente");
    }
};

const fazerDebito = (opcao, valorDebito) => {
    switch (opcao) {
        case 1:
            conta1 = conta1 - valorDebito
            console.log("Foi debitado R$" + valorDebito + ",00 na conta1 | O saldo atual é de: R$" + conta1);
            break;
        case 2:
            conta2 = conta2 - valorDebito
            console.log("Foi debitado R$" + valorDebito + ",00 na conta2 | O saldo atual é de: R$" + conta2);
            break;

        default:
            console.log("Erro no debito")
            break;
    }
}

const tranferirSaldo = (opcao, valorTranferencia) => {
    switch (opcao) {
        case 1:
            if (conta1 > valorTranferencia) {
                conta1 = conta1 - valorTranferencia;
                conta2 = conta2 + valorTranferencia;
                console.log("O valor  transferido da conta1 foi " + valorTranferencia + " Saldo atual: " + conta1);
            } else {
                console.log("ATENÇÂO SEM SALDO SUFICIENTE NA CONTA1")

            }
            break;
        case 2:
            if (conta2 > valorTranferencia) {

                conta2 = conta2 - valorTranferencia;
                conta1 = conta1 + valorTranferencia;
                console.log("O valor  transferido da conta2 foi " + valorTranferencia + " Saldo atual: " + conta2);
            } else {
                console.log("ATENÇÂO SEM SALDO SUFICIENTE NA CONTA2")
            }
            break;

        default:
            console.log("Erro na tranferencia")
            break;
    }
}

fazerDeposito(3,100)
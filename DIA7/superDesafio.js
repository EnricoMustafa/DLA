//Super desafio Aplicação de FInanças
let conta1 = 0;
let conta2 = 0;
let totalContas = conta1 + conta2; //quando o saldo das duas contas chegar a 1000 o limite vira 1.1
let limiteContas = 0;

const calcularSaldoDasContas = (conta1, conta2) => {
    conta1 < 0 ? console.log("ATENÇÂO: CONTA1 NÂO POSSUI SALDO SUFICIENTE") : null;
    conta2 < 0 ? console.log("ATENÇÂO: CONTA2 NÂO POSSUI SALDO SUFICIENTE") : null;

    totalContas = conta1 + conta2;

    if (totalContas > 1000) {
        limiteContas = 1.1;
        console.log("Limite atualizado para 10%, devido o saldo das duas contas chegarem em 1000")
    }
    console.log("Saldo total das contas é: R$" + totalContas);

}

const fazerDeposito = (opcao, valor) => {
    switch (opcao) {
        case 1:
            conta1 = conta1 + valor
            console.log("Foi adicionado R$" + valor + ",00 na conta1 | O saldo atual é de: R$" + conta1);
            break;
        case 2:
            conta2 = conta2 + valor
            console.log("Foi adicionado R$" + valor + ",00 na conta2 | O saldo atual é de: R$" + conta2);
            break;

        default:
            console.log("Erro no deposito")
            break;
    }
    calcularSaldoDasContas(conta1, conta2);
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
    calcularSaldoDasContas(conta1, conta2);
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
    calcularSaldoDasContas(conta1, conta2);
}

fazerDeposito(1, 100);
fazerDeposito(2, 100);
tranferirSaldo(1, 100)
tranferirSaldo(2, 100)
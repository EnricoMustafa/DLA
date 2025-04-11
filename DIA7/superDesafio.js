//Super desafio Aplicação de FInanças
let conta1 = 0;
let conta2 = 0;
let limite = 0.10;
let totalContas = conta1 + conta2; //quando o saldo das duas contas chegar a 1000 o limite vira 1.1
let limiteContas = 0;
let cotacaoDolar = 5.10;

// CORRETO FAZER UM VERIFICADOR SE O SALDO É 0
const calcularSaldoDasContas = (conta) => {
    let saldoTotal = conta1 + conta2;
    if (conta == 1) {
        console.log("Saldo conta1: R$" + conta1.toFixed(2));
    } else if (conta == 2) {
        console.log("Saldo conta2: R$" + conta2.toFixed(2));
    } else if (conta == 3) {
        console.log("O saldo total das contas é: R$" + saldoTotal.toFixed(2))
    } else {
        console.log("Digite uma conta valida");
    }
}

//CORRETO
const fazerDeposito = (contaOrigem, valor) => {
    if (contaOrigem == 1) {
        conta1 = conta1 + valor;
        console.log("DEPOSITO EFETUADO COM SUCESSO NA conta1")
    } else if (contaOrigem == 2) {
        conta2 = conta2 + valor;
        console.log("DEPOSITO EFETUADO COM SUCESSO NA conta2")
    }
};

//CORRETO
const fazerDebito = (contaOrigem, valorDebito) => {
    if (contaOrigem == 1) {
        conta1 = conta1 - valorDebito;
        console.log("Debito de R$" + valorDebito)
    } else if (contaOrigem == 2) {
        conta2 = conta2 - valorDebito;
        console.log("Debito de R$" + valorDebito)
    } else {
        console.log("ERRO AO EFETUAR O DEBITO")
    }
}

//CORRETO
const tranferirSaldo = (contaOrigem, valorTranferencia) => {

    if (contaOrigem == 1) {
        conta1 = conta1 - valorTranferencia;
        conta2 = valorTranferencia + conta2;
        console.log("Transferencia efetuada com sucesso")
    } else if (contaOrigem == 2) {
        conta2 = conta2 - valorTranferencia;
        conta1 = valorTranferencia + conta1;
        console.log("Transferencia efetuada com sucesso")
    }
}

const converterDolarReal = (contaOrigem, valor) => {
    if (contaOrigem == 1) {
        valorConversao = valor / cotacaoDolar;
        conta1 = conta1 - valor;
        console.log("O valor colocado foi: R$" + valor + " e em dollar ficou: US$" + valorConversao.toFixed(2))
    } else if (contaOrigem == 2) {
        valorConversao = valor / cotacaoDolar;
        conta2 = conta2 - valor;
        console.log("O valor colocado foi: R$" + valor + " e em dollar ficou: US$" + valorConversao.toFixed(2))
    }
}

fazerDeposito(1, 500);
fazerDeposito(2, 300);
calcularSaldoDasContas(2)
tranferirSaldo(1, 200);
calcularSaldoDasContas(2)
calcularSaldoDasContas(1)
converterDolarReal(1, 100);
calcularSaldoDasContas(1)
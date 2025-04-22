//Desafio do trem

function criarNo(elemento){
    return{
        data: elemento,
        next: null,
    };
}

let listaEncadeada = {
    head: null,

    insertFirst: function (elemento) {
        const novoNo = criarNo(elemento);

        if(!this.head){
            this.head = novoNo;
        } else {
            novoNo.next = this.head;
            this.head = novoNo;
        }

        return elemento;
    },

    insertLast: function (elemento) {
        if (!this.head) {
            this.head = novoNo;
        } else {
            let atual = this.head;
            while (atual.next) {
                atual = atual.next;
            }
            atual.next = novoNo;
        }
        return elemento;
    },

    insertAt: function(elemento, posicao) {
        const novoNo = criarNo(elemento);

        if (posicao === 0) {
            novoNo.next = this.head;
            this.head = novoNo;
            return elemento;
        }

        let atual = this.head;
        let anterior = null;
        let contador = 0;

        while (contador < posicao && atual) {
            anterior = atual;
            atual = atual.next;
            contador++;
        }

        if (contador === posicao) {
            anterior.next = novoNo;
            novoNo.next = atual;
            return elemento
        } else {
            console.log("Posicao invalida")
            return null;
        }
    },


};

console.log(listaEncadeada.insertFirst('Locomotiva'));
console.log(listaEncadeada.insertLast(''));

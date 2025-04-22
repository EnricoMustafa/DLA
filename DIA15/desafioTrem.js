//Desafio do trem

function criarNo(elemento){
    return{
        data: elemento,
        next: null,
    };
}

let listaEncadeada = {
    head: null,

    // O insertFirst insere o primeiro elemento
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

    // O insertLast insere o ultimo elemento
    insertLast: function (elemento) {
        const novoNo = criarNo(elemento);
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

    // O insertAt insere em um posição especifica
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

    // O deleteAt deleta um elemento especifico
    deleteAt: function(posicao) {
        if (!this.head) {
            console.log("A lista está vazia.");
            return null;
        }

        if (posicao === 0) {
            const elementoRemovido = this.head.data;
            this.head = this.head.next;
            return elementoRemovido;
        }

        let atual = this.head;
        let anterior = null;
        let contador = 0;

        while (contador < posicao && atual) {
            anterior = atual;
            atual = atual.next;
            contador++;
        }

        if (atual) {
            anterior.next = atual.next;
            return atual.data;
        } else {
            console.log("Posição inválida");
            return null;
        }
    },

    // O searchAt busca um elemento especifico
    searchAt: function (posicao) {
        let atual = this.head;
        let contador = 0;

        while (contador < posicao && atual) {
            atual = atual.next;
            contador++;
        }

        if (atual) {
            return atual.data;
        } else {
            console.log("Posição inválida")
            return null;
        }
    },

    // O travesal percorre todos os elementos
    traversal: function () {
       let atual = this.head;
       let resultado = [];
       
       while (atual) {
        resultado.push(atual.data);
        atual = atual.next;
       }

       return resultado;
    },

    // O indeOf mostra a posição especifica de um elemento
    indexOf: function (elemento) {
        let atual = this.head;
        let contador = 0;

        while (atual) {
            if (atual.data === elemento) {
                return contador;
            }
            atual = atual.next;
            contador++;
        }
        console.log("Elemento não encontrado");
        return -1;
    }


};

console.log(listaEncadeada.insertFirst('Locomotiva'));
console.log(listaEncadeada.insertLast('Vagão1'));
console.log(listaEncadeada.insertLast('Vagão2'));
console.log(listaEncadeada.searchAt(1));
console.log(listaEncadeada.traversal());
console.log(listaEncadeada.indexOf());

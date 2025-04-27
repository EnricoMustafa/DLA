//Ordenar produtos de um array

const produtos = [
    ["Arroz", 25.99],
    ["Feijão", 12.50],
    ["Leite", 6.49],
    ["Óleo", 8.99],
    ["Pão", 7.00],
    ["Café", 15.30],
    ["Açúcar", 4.89],
    ["Sal", 3.25],
    ["Macarrão", 5.79],
    ["Manteiga", 9.99]
];

function selectionSortPorNome (arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j][0] < arr[minIndex][0]) {
                minIndex = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
};

function selectionSortPorValor (arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j][1] < arr[minIndex][1]) {
                minIndex = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
};

console.log("\nTABELA ORIGINAL");
console.table(produtos);
console.log("\nTABELA ORDENADA POR NOME");
console.table(selectionSortPorNome(produtos));
console.log("\nTABELA ORDENADA POR VALOR");
console.table(selectionSortPorValor(produtos));
function criarMusica(nome, artista, tempo) {
    return {
        nome: nome,
        artista: artista,
        reproducoes: 0,
        tempo: tempo
    };
}

const playlist = {
    musicas: [],

    adicionarMusica: function (nome, artista, tempo) {
        const novaMusica = criarMusica(nome, artista, tempo);
        for (let i = this.musicas.length; i > 0; i--) {
            this.musicas[i] = this.musicas[i - 1];
        };
        this.musicas[0] = novaMusica;
        console.log(`Musica ${nome} adicionada a playlist`);
    },

    removerMusica: function (posicao, quantidade) {
        if (this.musicas.length === 0) {
            console.log(`Playlist vazia`)
        } else {
            let removidas = this.musicas.splice(posicao, quantidade);
            removidas.forEach((musica, index) => {
                console.log(`\n${index + 1}. Música removida com sucesso!`);
                console.log(`Artista: ${musica.nome}`);
                console.log(`Nome da música: ${musica.artista}`);
                console.log(`Duração: ${musica.tempo}`);
            })
        }
    },

    mostrarPlaylist: function () {
        if (this.musicas.length === 0) {
            console.log("Não existe Musica")
        } else {
            console.log(`Playlist:`);
            this.musicas.forEach((musica, index) => {
                console.log(`${index + 1}. ${musica.nome} - ${musica.artista} - ${musica.tempo}`);
            })
        }
    },

    tocarPLaylistToda: function () {
        if (this.musicas.length === 0) {
            console.log("A playlist está vazia");
        } else {
            for (let i = 0; i <= this.musicas.length; i++) {
                console.log(`\n${i+1}. Iniciou Musica`);
                console.log(`Finalizou Musica`);
            }
        }
    },

    tocarUmaMusica: function (posicao) {
        if (posicao < 0 || posicao >= playlist.length) {
            console.log("Posição inválida.");
        } else {
            let musica = this.musicas[posicao];
            console.log(`\nMúsica selecionada para tocar:`);
            console.log(`Artista: ${musica.nome}`);
            console.log(`Nome da música: ${musica.artista}`);
            console.log(`Duração: ${musica.tempo}`);
        }
    },

    ordenarPlaylist: function (arr) {
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
    }

};

console.log(playlist.adicionarMusica("Judia de mim", "Roberto Carlos", "3 min"));
console.log(playlist.adicionarMusica("Bota fofo", "Xheila carvalho", "2 min"));
console.log(playlist.adicionarMusica("sdulterio", "Mr catra", "5 min"));
console.log(playlist.adicionarMusica("zdulterio", "Mr catra", "5 min"));
console.log(playlist.adicionarMusica("ldulterio", "Mr catra", "5 min"));
console.log(playlist.adicionarMusica("wdulterio", "Mr catra", "5 min"));

console.log(playlist.mostrarPlaylist());
console.log(playlist.removerMusica(1,1));
console.log(playlist.tocarUmaMusica(1));
playlist.tocarPLaylistToda();

console.log(playlist.ordenarPlaylist(playlist.musicas))
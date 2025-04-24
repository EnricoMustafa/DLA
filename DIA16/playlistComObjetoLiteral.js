function criarMusica(nome, artista, tempo){
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
        for (let i = this.musicas.length; i > 0; i--){
            this.musicas[i] = this.musicas[i-1];
        }
        this.musicas[0] = novaMusica;
        console.log(`Musica ${nome} adicionada a playlist`);
    }
}

playlist.adicionarMusica("Esse cara sou eu","Roberto carlos", "5min");
console.log(playlist.musicas)

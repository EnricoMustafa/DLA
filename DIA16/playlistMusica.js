//Playlist de musica js

/* 
1) primeiro vou criar um array musica que vai armazenar as musicas adicionadas; OBS: atributos da musica são: artista, nome da musica, numero de reproduções e tempo total da musica;
2) criar uma função para adicionar as musicas dentro do array;
3) criar um array playlist que vai armazenar as musicas adicionadas; OBS: toda vez que a musica é adicionada é colocada no topo da playlist
4) criar uma função que remova as musicas de dentro do array playlist
5) função que mova a musica na playlist
6) cada vez que a musica é tocada deve icrementar o numero de reprodução;/ 
*/

let playlist = [];

function adicionarMusica(artista, nomeMusica, duracao) {
    let data = {
        artista: artista,
        nomeMusica: nomeMusica,
        duracao: duracao
    };

    playlist.push(data);
    console.log(`\nMusica adicionada com sucesso! \n Artista: ${data.artista} \n Nome da musica: ${data.nomeMusica} \n Duração: ${data.duracao}`);
}

function removerMusica(posicao, quantidade) {
    if (playlist.length === 0) {
        console.log("Nenhuma musica na playlist")
    } else {
        let removidas = playlist.splice(posicao, quantidade);
        removidas.forEach((musica, index) => {
            console.log(`\nMúsica removida com sucesso!`);
            console.log(`Artista: ${musica.artista}`);
            console.log(`Nome da música: ${musica.nomeMusica}`);
            console.log(`Duração: ${musica.duracao}`);
        });
    }
}

function tocarPLaylistToda() {

    if (playlist.length === 0) {
        console.log("A playlist está vazia");
    } else {
        for (let i = 0; i <= playlist.length; i++) {
            let enumerar = i + 1;
            console.log(`\n Iniciou musica ${enumerar}`);
            console.log(`Finalizou musica ${enumerar}`);
        }
        console.log(`\nPlaylist tocada completa`);
    }
}

function tocarUmaMusica(posicao) {
    if (posicao < 0 || posicao >= playlist.length) {
        console.log("Posição inválida.");
    } else {
        let musica = playlist[posicao];
        console.log(`\nMúsica selecionada:`);
        console.log(`Artista: ${musica.artista}`);
        console.log(`Nome da música: ${musica.nomeMusica}`);
        console.log(`Duração: ${musica.duracao}`);
    }
}

adicionarMusica("Roberto carlos", "seu eu fosse voce", "3min");
adicionarMusica("Andreson taliscads", "seu corno", "2min");
adicionarMusica("Andreson taliscaaa", "seu corno", "2min");
adicionarMusica("Andreson taliscavv", "seu corno", "2min");
removerMusica(0, 1);
tocarUmaMusica(0);

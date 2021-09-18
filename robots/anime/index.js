const state = require('../state');
const searchAnime = require('./jikan/animes');
async function robot() {
    console.log('> [anime-robot] Starting...');
    const conteudo = await state.load();
    const anime = await searchAnime(conteudo.searchTerm);
    conteudo.episodes = anime.episodes;
    console.log("> [anime-robot] Episodes in " + anime.title+ " added !!");
    conteudo.type = anime.type;
    console.log('> [anime-robot] type info added !!');
    conteudo.score = anime.type;
    console.log('> [anime-robot] score info added !!');
    conteudo.url = anime.url;
    console.log('> [anime-robot] url info added !!');
    conteudo.image_url = anime.url;
    console.log('> [anime-robot] image principal info added !!');
    conteudo.score = anime.score;
    console.log('> [anime-robot] score info added !!');
    await state.save(conteudo);
    console.log('> [anime-robot] Anime info added !!');
}
module.exports = robot;
const axios  = require('axios');
const apiurl = require("../../../credentials/credentials.json");
async function buscarAnime(nome_anime) {
    try {
        console.log('> [anime-robot] searching for '+nome_anime);
        const request = await axios.get(apiurl.urlJikan + apiurl.endpoint+ nome_anime);
        console.log("> [anime-robot] " + request.data.results.length + "results found");
        const primeiroResultado = await request.data.results.shift();
        return primeiroResultado;
    }
    catch (ex) {
        return "Erro ao autenticar: " + ex.message;
    }
}



module.exports = buscarAnime;

const readlineSync = require("readline-sync");
const state = require("../state");
async function digitarAnime() {
    const conteudo = {
        maximumSentences: 4
      }    
    console.log("----BEM VINDO----\n");
    conteudo.searchTerm = await readlineSync.question('Digite o Nome do anime: ');
    await state.save(conteudo);
}

module.exports = digitarAnime;

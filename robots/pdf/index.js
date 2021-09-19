const state = require('../state');
const fs = require('fs');


async function robot() {
const conteudo = await state.load();
let conteudoPdf = ''; 
conteudoPdf += "<h1 style='color: #5e9ca0; text-align: center;'><span style='color: #000000;'>Guide Of Threads</span></h1>";
conteudoPdf += `<h2 style='color: #2e6c80; text-align: center;'>${conteudo.searchTerm}:</h2>`
conteudoPdf += "<hr />"
conteudoPdf += "<h2>Informações:</h2>"
conteudoPdf += "<div>"
conteudoPdf += "<ul>"
conteudoPdf += `<li>Episodes : ${conteudo.episodes}</li>`
conteudoPdf += `<li>Type: ${conteudo.type}</li>`
conteudoPdf += `<li>Score: ${conteudo.score}</li>`
conteudoPdf += `<li>Url: ${conteudo.url}</li>`
conteudoPdf += "</ul>"
conteudoPdf += "</div>"
conteudoPdf += "<hr />"
conteudoPdf += "<h2>Conteudo:</h2>"

for(const sentences of conteudo.sentences){
  conteudoPdf += "<p><img src="+sentences.images+" width='300' height='157'/></p>"
  conteudoPdf += `<p>${sentences.text}</p>`

}

let contentFilePath = './roteiro.html';
await save(conteudoPdf);
async function save(content) {
    const contentString = JSON.stringify(content)
    return await fs.writeFileSync(contentFilePath, content)
  }
}

module.exports = robot;
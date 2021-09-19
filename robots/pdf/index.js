const state = require('../state');
const fs = require('fs');


async function robot() {
const conteudo = await state.load();
let conteudoPdf = ''; 
conteudoPdf += '<!DOCTYPE html>'
conteudoPdf += '<html lang="en">'
conteudoPdf += '<head>'
conteudoPdf += '    <meta charset="UTF-8">'
conteudoPdf += '    <meta http-equiv="X-UA-Compatible" content="IE=edge">'
conteudoPdf += '    <meta name="viewport" content="width=device-width, initial-scale=1.0">'
conteudoPdf += '    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">'
conteudoPdf += '    <title>Roteiro</title>'
conteudoPdf += '</head>'
conteudoPdf += '<body>'
conteudoPdf += '    <div class="container">'
conteudoPdf += '        <div class="row justify-content-md-center mt-5 mb-5">'
conteudoPdf += '            <div class="col-md-10">'
conteudoPdf += '                <h1 class="display-1 text-center">Guide of Threads</h1>'
conteudoPdf += '                <hr>'
conteudoPdf += `                <h2 class="display-4 text-center">${conteudo.title}</h2>`
conteudoPdf += `                <br>`
conteudoPdf += `                <h3 class="display-6 text-center">Information:</h3>`
conteudoPdf += `                <br>`
conteudoPdf += `                <ul class="list-group list-group-flush">`
conteudoPdf += `                    <li class="list-group-item"><b> Episodes : </b> ${conteudo.episodes}</li>`
conteudoPdf += `                    <li class="list-group-item"><b>Type:</b> ${conteudo.type}</li>`
conteudoPdf += `                    <li class="list-group-item"><b>Score:</b> ${conteudo.score}</li>`
conteudoPdf += `                    <li class="list-group-item"><b>Url:</b> ${conteudo.score}</li>`
conteudoPdf += `                </ul>`
conteudoPdf += `                <br>`
conteudoPdf += `                <h3 class="display-6 text-center mb-5">Content:</h3>`
conteudoPdf += `                <div class="row row-cols-1 row-cols-md-2 g-4">`
for(const sentences of conteudo.sentences){
  conteudoPdf += `                    <div class="col">`
  conteudoPdf += `                      <div class="card mb-3 h-100">`
  conteudoPdf += `                        <img src="${sentences.images[0]}" class="img-fluid rounded mx-auto d-block" alt="...">`
  conteudoPdf += `                        <div class="card-body">`
  conteudoPdf += `                          <p class="card-text">${sentences.text}.</p>`
  conteudoPdf += `                        </div>`
  conteudoPdf += `                      </div>`
  conteudoPdf += `                    </div>`
  
}
conteudoPdf += `                </div>`
conteudoPdf += `            </div>`
conteudoPdf += `        </div>`
conteudoPdf += `    </div>`
conteudoPdf += `</body>`
conteudoPdf += `</html>`


let contentFilePath = './roteiro.html';
await save(conteudoPdf);
async function save(content) {
    return await fs.writeFileSync(contentFilePath, content)
  }
}

module.exports = robot;
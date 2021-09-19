const algorithmia = require("algorithmia");
const sbd = require("sbd");
const state = require('../state');
const ibm = require('./ibm/languageUnderstanding');

async function searchOfWiki() {
    try {
        console.log('> [text-robot] Starting...'); 
        const conteudo = await state.load()
        const busca = "history of " + conteudo.searchTerm;
        const authenticated = await algorithmia('sim2E7jOGBaKoRzZ3zgX7SLxT4F1');
        const wikiAlgorithmia = await authenticated.algo('web/WikipediaParser/0.1.2?timeout=300');
        const wikiResp = await wikiAlgorithmia.pipe(busca);
        const contWiki = await wikiResp.get().content;
        const snzWiki = await sanitizeWikiWithSentences(contWiki);
        conteudo.sentences = [];
        snzWiki.forEach( (sentence) => {
            conteudo.sentences.push({
                text:sentence,
                keywords:[],
                images:[]
            })
        })
        await limitMaximumSentences(conteudo);
        await KeywordsOfAllSentences(conteudo);
        state.save(conteudo);
    } catch(e){
        return console.log('erro:' + e);
    }
}

async function sanitizeWikiWithSentences(text) {
    try {
        const blankLines = await removeBlankLines(text);
        const sentences = await sbd.sentences(blankLines);
        return sentences;
    } catch(e) {
        return new Error('Erro ao sanitizar texto:' + e.message)
    }
    
    async function removeBlankLines(text) {
        return await text.split('\n').filter((line) => {
            if(line.trim().length === 0 ||line.trim().startsWith('=') ) {
                return false 
            } 
            return true 
        }).join(' ');
    }
}

function limitMaximumSentences(content) {
    content.sentences = content.sentences.slice(0, content.maximumSentences)
}

async function KeywordsOfAllSentences(content) {
    console.log('> [text-robot] Starting to fetch keywords from Watson')

    for (const sentence of content.sentences) {
        console.log(`> [text-robot] Sentence: "${sentence.text}"`)

        sentence.keywords = await await ibm(sentence.text)

        console.log(`> [text-robot] Keywords: ${sentence.keywords.join(', ')}\n`)
    }
}
module.exports = searchOfWiki;
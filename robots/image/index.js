const state = require('../state');
const fs = require('fs');
const imageDownloader = require('image-downloader')
const google = require('googleapis').google
const customSearch = google.customsearch('v1')
const customSearchCredentials = require('../../credentials/credentials.json');
async function robot() {
    console.log('> [image-robot] Starting...')
    const conteudo = await state.load();
    await fetchImagesOfAllSentences(conteudo)
    await downloadImg(conteudo) 
    await state.save(conteudo);
    
}

async function fetchGoogleAndReturnImagesLinks(query) {
    const response = await customSearch.cse.list({
        auth:customSearchCredentials.apikeygoogle,
        cx:customSearchCredentials.searchEngineId,
        q:query,
        searchType: 'image',
        num:4
    })
    return response.data.items.map((item) => {
        return item.link
      })
}

async function fetchImagesOfAllSentences(content) {
    for (const sentence of content.sentences) {
      const query = `${content.searchTerm} ${sentence.keywords[0]}` ; 
      sentence.images = await fetchGoogleAndReturnImagesLinks(query);
      sentence.googleSearchQuery = query;

      console.log(`> [image-robot] Querying Google Images with: "${query}"`);
    }
}

async function downloadImg(content) {
  content.downloadedImages = []

  for (let sentenceIndex = 0; sentenceIndex < content.sentences.length; sentenceIndex++) {
    const images = content.sentences[sentenceIndex].images

    for (let imageIndex = 0; imageIndex < images.length; imageIndex++) {
      const imageUrl = images[imageIndex]

      try {
        if (content.downloadedImages.includes(imageUrl)) {
          throw new Error('Image already downloaded')
        }

        await downloadAndSave(imageUrl, `${sentenceIndex}-original.png`)
        content.downloadedImages.push(imageUrl)
        console.log(`> [image-robot] [${sentenceIndex}][${imageIndex}] Image successfully downloaded: ${imageUrl}`)
        break
      } catch(error) {
        console.log('erro ao baixar imagem');
        console.log(`> [image-robot] [${sentenceIndex}][${imageIndex}] Error (${imageUrl}): ${error}`)
      }
    }
  }
}

async function downloadAndSave(url, fileName) {
  let pasta = '../../content/'
  if(!fs.existsSync('../../content/')) {
    pasta = './content/'
  }
  return imageDownloader.image({
    url: url,
    dest: `${pasta}${fileName}`
  })
}
module.exports = robot;
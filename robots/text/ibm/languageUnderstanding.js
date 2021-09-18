const fs = require('fs');
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const apikeywatson = require("../../../credentials/credentials.json"); 

const nlu = new NaturalLanguageUnderstandingV1({
    authenticator: new IamAuthenticator({ apikey: apikeywatson.apikey }),
    version: '2018-04-05',
    serviceUrl: apikeywatson.url
  });
  
async function keywordsUnderstanding(content) {
    try {
        const analyse = await nlu.analyze(
            {
              text:content,
              features: {
                concepts: {},
                keywords: {}
              }
            });
        return analyse.result.keywords.map((keyword) => {
          return keyword.text
        }).slice(0,3);
    } catch(e){
        return new Error(e);
    }
}
module.exports = keywordsUnderstanding ; 

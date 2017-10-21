var AYLIENTextAPI = require('aylien_textapi');
var apiKey = require('../summarizeapicredentials')
var textapi = new AYLIENTextAPI(apiKey);

function analyseText(article, callback) {
  let regex = /\w[.?!](\s|$)/g;
  let numSentences = article.match(regex).length ;
  textapi.summarize({
    'text': article,
    'title': 'Catalonia',
    sentences_number: Math.floor(numSentences / 5)
  }, function(error, response) {
    if (error === null) {
      callback(response.sentences);
    } else {
      callback(error);
    }
  });
}


module.exports = analyseText;

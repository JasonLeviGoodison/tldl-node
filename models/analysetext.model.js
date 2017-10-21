var AYLIENTextAPI = require('aylien_textapi');
var apiKey = require('../summarizeapicredentials')
var textapi = new AYLIENTextAPI(apiKey);

function analyseText(article, callback) {
  let regex = /\w[.?!](\s|$)/g;
  textapi.summarize({
    'text': article,
    'title': 'Catalonia',
    sentences_number: 3
  }, function(error, response) {
    if (error === null) {
      callback(response.sentences);
    } else {
      callback(error);
    }
  });
}


module.exports = analyseText;

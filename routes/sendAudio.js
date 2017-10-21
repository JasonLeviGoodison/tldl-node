var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    const Speech = require('@google-cloud/speech');
    speech = Speech({
        projectId: "tdld-183601",
        keyFilename: "tldl-33486c6ff6e3.json"
      });
    console.log(req);
    res.sendStatus(200);
    const config = {
        encoding: "LINEAR16",
        sampleRateHertz: 16000,
        languageCode: "en_US"
      };
      const audio = {
        content: req.body.audioString
      };
    
      const request = {
        config: config,
        audio: audio
      };

      speech.recognize(request)
      .then((data) => {
          console.log(data);
        const response = data[0];
        response.results.forEach((result) => {
          console.log(`Transcription: `, result.alternatives[0].transcript);
          result.alternatives[0].words.forEach((wordInfo) => {
            console.log(`Word: ${wordInfo.word}`);
          });
        });
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
});

module.exports = router;

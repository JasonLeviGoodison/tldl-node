var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    const Speech = require('@google-cloud/speech');
    speech = Speech({
        projectId: "tdld-183601"
      });
    console.log(req);
    res.sendStatus(200);
    const config = {
        encoding: "AMR_WB",
        sampleRateHertz: 16000,
        languageCode: "en_US"
      };
      const audio = {
        content: req.body
      };
    
      const request = {
        config: config,
        audio: audio
      };

      speech.recognize(request)
      .then((data) => {
          console.log(data);
        /*const response = data[0];
        response.results.forEach((result) => {
          console.log(`Transcription: `, result.alternatives[0].transcript);
          result.alternatives[0].words.forEach((wordInfo) => {
            // NOTE: If you have a time offset exceeding 2^32 seconds, use the
            // wordInfo.{x}Time.seconds.high to calculate seconds.
            const startSecs = `${wordInfo.startTime.seconds}` + `.` +
                (wordInfo.startTime.nanos / 100000000);
            const endSecs = `${wordInfo.endTime.seconds}` + `.` +
                (wordInfo.endTime.nanos / 100000000);
            console.log(`Word: ${wordInfo.word}`);
            console.log(`\t ${startSecs} secs - ${endSecs} secs`);
          });
        });*/
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
});

module.exports = router;

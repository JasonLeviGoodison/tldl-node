var express = require('express');
var router = express.Router();
var AnalyseText = require('../models/analysetext.model')
var Transcript = require('../models/transcript.model')
Transcript.find({}, function(err, listOfLectures) {
  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' , listOfLectures: listOfLectures, lecture: "Select a lecture from the left panel"});
  });

  router.get('/[0-9]*', function(req, res, next) {
    let time = req.originalUrl;
    time = time.replace("/", '')
    time = parseInt(time)
    // do a check to see if its in the database, if not load the error screen, if so render the lecture
    Transcript.find({}, function(err, listOfLectures) {
      listOfLectures.forEach(function(elem) {
        if(elem.time_seconds == time) {
          var notes = "Notes:<br>" + elem.text + "<br><br>Summary:<br>" + elem.summary;
          res.render('index', { title: 'Express' , listOfLectures: listOfLectures, lecture: notes});
        }
      });
    });
  });

});

module.exports = router;

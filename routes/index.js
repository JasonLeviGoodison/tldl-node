var express = require('express');
var router = express.Router();
var AnalyseText = require('../models/analysetext.model')
var listOfLectures = [{"time": "Monday"}, {"time": "Tuesday"}];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , listOfLectures: listOfLectures, lecture: "Current lecture information"});
  //var test =  "The deaths of four Special Forces soldiers in Niger this month have sparked wider debate about military service, the civilian-military divide in the United States and the contours of public discourse about one of the most country’s most hallowed communities: the families of troops killed in combat. When White House Chief of Staff John F. Kelly defended President Trump’s call to the wife of one of the soldiers killed in Niger, the former four-star general stressed the lack of a prescribed script for any president. If you elect to call a family like this, it is about the most difficult thing you could imagine. There’s no perfect way to make that phone call, Kelly told reporters Thursday. His son, Marine 1st Lt. Robert M. Kelly, was killed in Afghanistan seven years ago."
  //  AnalyseText(test,function(response) {
  //  console.log(response)
  //});
});

router.get('/*', function(req, res, next) {
  let time = req.originalUrl;
  time = time.replace("/", '')
  // do a check to see if its in the database, if not load the error screen, if so render the lecture
  let lecture = "Some thing I grabbed from the database"
  res.render('index', { title: 'Express' , listOfLectures: listOfLectures, lecture: lecture});
});

module.exports = router;

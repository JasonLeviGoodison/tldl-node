var express = require('express');
var router = express.Router();

var listOfLectures = [{"time": "Monday"}, {"time": "Tuesday"}];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , listOfLectures: listOfLectures, lecture: "Current lecture information"});
});
router.get('/*', function(req, res, next) {
  let time = req.originalUrl;
  time = time.replace("/", '')
  // do a check to see if its in the database, if not load the error screen, if so render the lecture
  let lecture = "Some thing I grabbed from the database"
  res.render('index', { title: 'Express' , listOfLectures: listOfLectures, lecture: lecture});
});

module.exports = router;

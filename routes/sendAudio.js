var express = require('express');
var router = express.Router();
var Transcript = require('../models/transcript.model');
var AnalyseText = require('../models/analysetext.model');

router.post('/', function(req, res, next) {
    res.sendStatus(200);
    Transcript.create({timestamp: Date.now(), text: req.body.audioString}, function() {});
});

module.exports = router;

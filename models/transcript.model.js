
// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called lectureTranscriber
mongoose.connect('mongodb://127.0.0.1:27017/lectureTranscriber');
// Create a schema
var TranscriptSchema = new mongoose.Schema({
  timestamp: Date,
  text: String
});

var Transcript = mongoose.model('Transcript', TranscriptSchema);

module.exports = Transcript;
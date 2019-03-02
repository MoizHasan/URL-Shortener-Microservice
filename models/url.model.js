const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Url Model 

var urlSchema = new mongoose.Schema({
  original_url: {type: String, unique: true, required: true},
  short_url: {type: String, unique: true, required: true}
});

var Url = mongoose.model('Url', urlSchema); 


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Url Model 

var UrlSchema = new mongoose.Schema({
  original_url: {type: String, unique: true, required: true},
  short_url: {type: String, unique: true, required: true}
});

// Export the model
module.exports = mongoose.model('Url', UrlSchema);
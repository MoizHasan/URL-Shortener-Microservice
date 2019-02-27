const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

//Create Url Model 

var urlSchema = new mongoose.Schema({
  original_url: {type: String, required: true},
  short_url: {unique: true, index: true}
});

var Url = mongoose.model('Url', urlSchema); 

//create and save url 
var createAndSaveURL = function(long_url, done) {
    //check to see if this url hasn't already been entered.
  
};

//get url
var getUrlByShortUrl = function(short_url, done) {
    Url.findOne({short_url: short_url}, function(err, url) {} )
}

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
    Url.create({original_url: long_url, short_url: 1})
  
};

// var createAndSavePerson = function(done) {
//   var joe = new Person({ name: 'joe', age: '22'});
//   joe.save((err, data) => {
//     if (err) console.log(err);
//     return done(null ,data);
//   });
// };

//get url
var getUrlByShortUrl = function(short_url, done) {
    Url.findOne({short_url: short_url}, function(err, url) {});
}

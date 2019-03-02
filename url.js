const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

//create and save url 
var createAndSaveUrl = function(long_url, done) {
  //verify that passed in url is valid
  //generate short url and verify that it doesn't already exist in db.
  while(1) { };
  var short_url = "";
  
  var url = new Url({original_url: long_url, short_url: short_url});
  
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

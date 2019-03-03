var Url = require('../models/url');

exports.shorten_url = function (req, res, next) {
    // add some sort of url validation here.
    var short_url = generate_short_url(); 
    let url = new Url(
        {
            original_url: req.body.url,
            short_url: short_url
        }
    );

  url.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('URL ');
    });
};

var generate_short_url = function() {
    var short_url = "";
    let char_string = "0123456789abcdfghjklmnpqrs";
    for (let i = 0; i <= 8; i++) {
        short_url += char_string.charAt(Math.floor((Math.random() * char_string.length-1)));
    }
    return short_url;
}

exports.redirect_to_url = function(req, res, short_url) {
    //find one by short url
    var long_url = Url.findOne({short_url: short_url}).exec(function (err, url) {
    if (err) {
      
    }
    
    });
    res.redirect(long_url); 
}
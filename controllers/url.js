var Url = require('../models/url');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.shorten_url = function (req, res, next) {
    //add some sort of url validation here.
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
        res.send('URL saved successfully');
    });
  res.json({original_url: req.body.url, short_url: short_url});
};

var generate_short_url = function() {
    var short_url = "";
    let char_string = "0123456789abcdfghjklmnpqrs";
    for (let i = 0; i <= 8; i++) {
        short_url += char_string.charAt(Math.floor((Math.random() * char_string.length-1)));
    }
    return short_url;
}

exports.redirect_to_url = function(req, res, next) {
    //find one by short url
    var short_url = req.params.short_url;
    //Adventure.findOne({ type: 'iphone' }, 'name', function (err, adventure) {});
    var original_url = Url.findOne({short_url: short_url}, function (err, url) {
    if (err) {
        return next(err);
    } else {
       res.redirect(301, url.original_url);
     }
    });
    res.json({long_url: original_url}); 
}
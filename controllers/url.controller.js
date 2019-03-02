var Url = require('../models/url');

exports.shorten_url = function (req, res, next) {
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
        res.send('');
    })
};

generate_short_url = function() {
    var short_url = "";
    
    return short_url;
}
var Url = require('../models/url');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.create_short_url = function (req, res, next) {
  const url = req.body.url;
  if (validURL(url)) { //validity check
      shorten_url(req, res, next);
  } else {
    res.json({error: "Invalid URL"});
    }
};

  var shorten_url = function(req, res, next) {
    const url = req.body.url;
    //return stored result if url has already been entered.
      Url.findOne({original_url : url}).then(found => {
        if (found) {
          res.json({origial_url: url, short_url: req.get('host') + '/api/shorturl/' + found.short_url});
        } else {
        var short_url = generate_short_url(); 
        let url = new Url(
        {
          original_url: req.body.url,
          short_url: short_url
        });

  url.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('URL saved successfully');
    });
        res.json({original_url: req.body.url, short_url: req.get('host') + '/api/shorturl/' + short_url});
        }
      });
  }


function validURL(str) { //from devshed
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

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
    var original_url = Url.findOne({short_url: short_url}, function (err, url) {
    if (url !== null) {
    if (err) {
        res.json({error: "document error"});
    } else {
       res.redirect(301, url.original_url);
     }
    } else {
      res.json({error: "No matching results found"});
     //throw new Error("No matching results found."); 
    }
    });
}
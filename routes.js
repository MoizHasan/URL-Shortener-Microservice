var express = require('express');
var router = express.Router();

// Require the controllers
var url_controller = require('./controllers/url.js');

// a simple test url to check that all of our files are communicating correctly.
router.get('/api/test', url_controller.test);

router.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

router.post('/api/shorturl/new', url_controller.create_short_url);

router.get('/api/shorturl/:short_url', url_controller.redirect_to_url);


module.exports = router;
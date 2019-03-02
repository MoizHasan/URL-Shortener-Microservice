var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var url_controller = require('../controllers/url');


router.post('./api/shorturl/new', url_controller.new_url);

router.get('./api/shorturl/:short_url', url_controller.redirect_to_url);


module.exports = router;
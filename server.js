'use strict';

const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');

var cors = require('cors');

var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
//mongoose.connect(process.env.MONGOLAB_URI);

app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here
const body_parser = require('body-parser');

var Url = require("./url.js").UrlModel;
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});


var createUrl = require("./url.js").createAndSaveUrl;
app.post("/api/shorturl/new", function (req, res) {
    
});

//var getUrlByShortUrl = require("./url.js").getUrlByShortUrl;
app.get("./api/shorturl/:short_url", function (req, res) {
  res.redirect(
});

app.listen(port, function () {
  console.log('Node.js listening ...');
});
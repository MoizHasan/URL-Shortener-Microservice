'use strict';

const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');

var cors = require('cors');

var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
mongoose.connect(process.env.MONGOLAB_URI);

app.use(cors());
//import routes
const url = require('./routes.js');
/** this project needs to parse POST bodies **/
// you should mount the body-parser here
const body_parser = require('body-parser');
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));
app.use('/urls', url);

const product_controller = require('../controllers/product.controller');


app.listen(port, function () {
  console.log('Node.js listening ...');
});
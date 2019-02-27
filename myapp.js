const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

//Create Url Model 

var urlSchema = new mongoose.Schema({
  original_url: {type: String, required: true},
  short_url: {unique: true, index: true}
});

var Url = mongoose.model('Url', urlSchema)
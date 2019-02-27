const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

//Create Url Model 

var urlSchema = new mongooose.Schema({
  url: {type: String, 
  
})
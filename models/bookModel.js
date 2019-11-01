const mongoose = require('mongoose');

let bookModel = function(){
  let bookschema = mongoose.Schema({
    title:String,
    category:String,
    description:String,
    author:String,
    publisher:String,
    price:Number,
    cover:String
  });

  bookschema.methods.truncText = function(length){
    return this.description.substring(0,length);
  }

  return mongoose.model('Book',bookschema);
}

module.exports = new bookModel();
const mongoose = require('mongoose');

let categoryModel = function(){
  let categorySchema = mongoose.Schema({
    name:String
  });

  
  return mongoose.model('Category',categorySchema);
}

module.exports = new categoryModel();
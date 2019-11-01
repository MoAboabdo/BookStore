'use strict';
const mongoose = require('mongoose');

let db = function(){
  return{
    config:function(conf){
      mongoose.connect('mongodb://localhost/mobooks');
      let db = mongoose.connection;
      db.on('error',console.error.bind(console,'Connection Error'));
      db.once('open',function(){
        console.log('DB connection open......');
      });
    }
  }
}

module.exports = db();
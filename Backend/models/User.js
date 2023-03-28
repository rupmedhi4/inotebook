const mongoose = require('mongoose'); 
const UserSchema = new Schema({
   name:{
    type:String,
    required:true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:string,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
  });
  module.exports = mongoose('user',UserSchema)
  
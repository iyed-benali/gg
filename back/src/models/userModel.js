const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema(
{
    name:{
        type:String,
        require:true,
        unique:true
    },
    email:String,
    password:String,
    role:{
        type:String,
        enum:["admin","regular"]
    }
},
);
  
  const userModel = mongoose.model('user', userSchema);


  module.exports = userModel

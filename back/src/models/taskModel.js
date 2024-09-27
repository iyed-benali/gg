const mongoose = require ('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },

description:String,
status:{
    type :String,
    enum: ["pending","in progress", "completed"],
    default:"pending"  
},
assignedUser:{
    type:String,
    default:"not assigned"
}

  });
  
  const TaskModel = mongoose.model('task', taskSchema);


  module.exports = TaskModel

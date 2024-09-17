// adminController.js
const { log } = require('util');
const Admin = require('../models/adminModel');

// Controller to add a new admin
exports.addAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newAdmin = new Admin({ username, password });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
exports.getAll= async (req,res)=>{
try {
 var data = await  Admin.find()
 res.status(200).json(data)
  
} catch (error) {
  res.status(500).json({ message: 'Internal Server Error' });
}
}

exports.deleteAdmin = async (req,res)=>{
  try {
    const {id} = req.params
    console.log( id);
    const deleted = await Admin.deleteOne({_id:id})
    res.status(202).json(deleted)
  } catch (error) {
    res.status(500).json("Error occured")
  }
 
}


exports.update = async(req,res) =>{
try {
  if (!req.body) {
    res.status(404).json('Req cannot be empty')
  }
  else{
    const id = req.params.id
    const updated = await Admin.findByIdAndUpdate(id,req.body)
    res.status(201).json('Req is updated')
  }
} catch (error) {
  res.status(500).json('Something went wrong')
}
}
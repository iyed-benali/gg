const mongoose=require("mongoose")
const Task = require("../models/taskModel.js")


exports.addTask = async (req,res)=>{
    try{
        const {title,description}=req.body
        // console.log(title,description)
        var response = await  Task.create({
            title,description
        })
        res.status(201).send(response)
    }
    catch(err){
        res.status(404).send("not found")
    }
}
exports.assignTask = async(req,res)=>{
try {
    const {id}=req.params
    console.log(id);
    
const {assignedUser} = req.body
console.log(assignedUser);

var response=  await Task.findByIdAndUpdate(id,{
    assignedUser:assignedUser
})
  
res.status(204).json(response)
} catch (error) {
    res.status(404).json('not found')  
}

}
exports.updateStatus = async(req,res)=>{
    try {
        const {id}=req.params
        
        
    const {status} = req.body
   
    
    var response=  await Task.findByIdAndUpdate(id,{
        status:status
    })
    
      
    res.status(204).json(response)
    } catch (error) {
        res.status(404).json('not found')  
    }
    }

exports.getTasks= async(req,res)=>{
    // /api/tasks?role=Regular&name=John Doe
    try{

        const {role,name} = req.query
    console.log(role,name);
    
        let tasks 
        if(role==="admin"){
           tasks =  await Task.find() 
        }
        else{
            tasks= await Task.find({
                assignedUser:name
            })
        }
        res.status(200).json(tasks)
    }
    catch(err){
        res.status(404).json('not found')  
    }
}

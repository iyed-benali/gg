const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/taskController.js')


router.post("/add",TaskController.addTask)
router.patch("/assign/:id",TaskController.assignTask)
router.patch("/completed/:id",TaskController.updateStatus)
router.get('/gettasks',TaskController.getTasks)


module.exports = router



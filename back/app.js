const express = require('express')
const database = require('./src/config/database')
const app = express()

const cors = require('cors')
const TaskRoute = require('./src/routes/taskRoute')

app.use(cors());
app.use(express.json());



app.use("/api/tasks",TaskRoute)




const PORT = 3001

app.listen(PORT,()=>{
    console.log(`server listening on port   ${PORT}`)
})

const express = require('express')
const database = require('./src/config/database')
const app = express()

const cors = require('cors')
const TaskRoute = require('./src/routes/taskRoute')
const UserRoute = require('./src/routes/userRoute')


app.use(cors());
app.use(express.json());



app.use("/api/tasks",TaskRoute)
app.use("/api/users",UserRoute)




const PORT = 3001

app.listen(PORT,()=>{
    console.log(`server listening on port   ${PORT}`)
})

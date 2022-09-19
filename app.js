const express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
//middleware

app.use(express.json())

//routes
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/hello', (req, res) => res.send('Hello World!'))
app.use('/api/v1/tasks', tasks)

//app.get('/api/v1/tasks')              --get all the tasks
//app.post C/api/v1/tasks')             --create a new task
//app.get("/api/v1/tasks/:id')          --get sidgle task
//app.patch('/api/v1/tas ks/:id')       --update task
//app.delete( '/api/v1/tasks/:id')      --delete task


const start = async ()=>{
try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

} catch (error) {
    console.log(error);
}
}
start() 

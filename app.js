require('dotenv').config()

const connectDB = require('./db/connect')
const auth = require('./routes/auth')
const tasks = require('./routes/tasks')

const express = require('express')
const app = express()

//middleware
app.use(express.json())

//routes
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/hello', (req, res) => res.send('Hello World!'))

app.use('/api/v1/auth', auth)
app.use('/api/v1/tasks', tasks)

//app.get('/api/v1/tasks')              --get all the tasks
//app.post C/api/v1/tasks')             --create a new task
//app.get("/api/v1/tasks/:id')          --get sidgle task
//app.patch('/api/v1/tas ks/:id')       --update task
//app.delete( '/api/v1/tasks/:id')      --delete task

connectDB(process.env.MONGO_URI)
  .then(() => {
    const port = process.env.PORT
    app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
  })
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })

const Task = require('../models/Task')
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).send({tasks})
    } catch (error) {        
        res.status(500).json({error: error.message})

    }
}

const createTask = async (req, res) => {
    // const task = await Task.create({name: 'first task', completed: false})
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getTask = async (req, res) => {

    try {
        const {id: taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        if(!task){
            return res.status(404).send('No task id')
        }
        
        res.status(200).json({task})
        // res.json({ id: req.params.id })
    } catch (error) {
        res.status(500).json({error: error.message})
    
    }
}

const updateTask = async (req, res) => {
    res.send('update task')
}

const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if (!task){
            return res.status(404).send('No task found and nothing is deleted')
        }
        res.status(201).json({task})

    } catch (error) {
        res.status(500).json({error: error.message})
    }
        
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
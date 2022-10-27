const Task = require('../models/Task')

const updateTask = async (taskId, { task: name, completed }) => {
  const task = await Task.findByIdAndUpdate(
    taskId,
    { name, completed },
    { new: true }
  )
  return { task }
}

module.exports = updateTask

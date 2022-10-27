const Task = require('../models/Task')

const createTask = async (userId, task) => {
  const createdTask = await Task.create({ createdBy: userId, name: task })
  return { createdTask }
}

module.exports = createTask

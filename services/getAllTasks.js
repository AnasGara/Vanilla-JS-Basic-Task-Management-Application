const Task = require('../models/Task')

const getAllTasks = async (userId) => {
  const tasks = await Task.find({ createdBy: userId })
  return { tasks }
}

module.exports = getAllTasks

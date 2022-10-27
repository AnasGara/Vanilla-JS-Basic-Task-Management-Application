const Task = require('../models/Task')

const getTask = async (userId, taskId) => {
  const task = await Task.findOne({ createdBy: userId, id: taskId })
  return { task: task._doc }
}

module.exports = getTask

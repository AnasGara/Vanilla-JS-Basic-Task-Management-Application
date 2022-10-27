const Task = require('../models/Task')

const deleteTask = async (taskId) => {
  await Task.findByIdAndRemove(taskId)
  return { msg: 'successfully removed' }
}

module.exports = deleteTask

const getTask = require('../services/getTask')
const handleLoggedUser = require('./handleLoggedUser')

const handleDeleteTask = async (headers, taskId, newTask) => {
  const [hasErrors, payload] = await handleLoggedUser(headers)
  if (hasErrors) return [true, payload]

  const { task } = await getTask(payload.userId, taskId)
  if (!task) return [true, { msg: 'invalid taskId' }]

  return [false, {}]
}

module.exports = handleDeleteTask

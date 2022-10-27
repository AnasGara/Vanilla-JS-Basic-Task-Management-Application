const handleLoggedUser = require('../handlers/handleLoggedUser')
const getAllTasksService = require('../services/getAllTasks')
const createTaskService = require('../services/createTask')
const getTaskService = require('../services/getTask')
const handleUpdateTask = require('../handlers/handleUpdateTask')
const updateTaskService = require('../services/updateTask')
const handleDeleteTask = require('../handlers/handleDeleteTask')
const deleteTaskService = require('../services/deleteTask')

const getAllTasks = async (req, res) => {
  const [hasErrors, handlerPayload] = await handleLoggedUser(req.headers)
  if (hasErrors) {
    return res.json({
      success: false,
      payload: handlerPayload,
    })
  }

  const { userId } = handlerPayload
  const servicePayload = await getAllTasksService(userId)
  return res.json({
    success: true,
    payload: servicePayload,
  })
}

const createTask = async (req, res) => {
  const [hasErrors, handlerPayload] = await handleLoggedUser(req.headers)
  if (hasErrors) {
    return res.json({
      success: false,
      payload: handlerPayload,
    })
  }

  const { userId } = handlerPayload
  const servicePayload = await createTaskService(userId, req.body.task)
  return res.json({
    success: true,
    payload: servicePayload,
  })
}

const getTask = async (req, res) => {
  const [hasErrors, handlerPayload] = await handleLoggedUser(req.headers)
  if (hasErrors) {
    return res.json({
      success: false,
      payload: handlerPayload,
    })
  }

  const { userId } = handlerPayload
  const servicePayload = await getTaskService(userId, req.params.id)
  return res.json({
    success: true,
    payload: servicePayload,
  })
}

const updateTask = async (req, res) => {
  const [hasErrors, handlerPayload] = await handleUpdateTask(
    req.headers,
    req.params.id,
    req.body
  )
  if (hasErrors) {
    return res.json({
      success: false,
      payload: handlerPayload,
    })
  }

  const servicePayload = await updateTaskService(req.params.id, req.body)
  return res.json({
    success: true,
    payload: servicePayload,
  })
}

const deleteTask = async (req, res) => {
  const [hasErrors, handlerPayload] = await handleDeleteTask(
    req.headers,
    req.params.id
  )
  if (hasErrors) {
    return res.json({
      success: false,
      payload: handlerPayload,
    })
  }

  const servicePayload = await deleteTaskService(req.params.id)
  return res.json({
    success: true,
    payload: servicePayload,
  })
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}

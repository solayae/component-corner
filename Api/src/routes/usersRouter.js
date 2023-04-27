const { Router } = require('express');
const usersRouter = Router();
const { handleUsersAll, handleUserById, handleUserCreate, handleUpdateUser,handleDeleteUser } = require('../handler/usersHandler')


usersRouter.get('/', handleUsersAll)
usersRouter.get('/:UsersId', handleUserById)
usersRouter.post('/', handleUserCreate)
usersRouter.put('/', handleUpdateUser)
usersRouter.delete('/:UsersId', handleDeleteUser)


module.exports = usersRouter
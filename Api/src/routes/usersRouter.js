const { Router } = require('express');
const usersRouter = Router();
const { handleUsersAll, handleUserById, handleUserCreate, handleUpdateUser,handleDeleteUser, handleUpdateImagen, handleUpdateProfile } = require('../handler/usersHandler')


usersRouter.get('/', handleUsersAll)
usersRouter.get('/:UsersId', handleUserById)
usersRouter.post('/', handleUserCreate)
usersRouter.put('/', handleUpdateUser)
usersRouter.delete('/:UsersId', handleDeleteUser)
usersRouter.put('/imagen', handleUpdateImagen)
usersRouter.put('/profile', handleUpdateProfile)


module.exports = usersRouter
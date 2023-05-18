const { Router } = require('express');
const usersRouter = Router();
const {
  handleUsersAll,
  handleUserById,
  handleUserCreate,
  handleUpdateUser,
  handleDeleteUser,
  handleUpdateProfile,
  handleUpdateImagen
} = require('../handler/usersHandler');

usersRouter.get('/', handleUsersAll);
usersRouter.get('/:UsersId', handleUserById);
usersRouter.post('/', handleUserCreate);
usersRouter.put('/', handleUpdateUser);
usersRouter.delete('/:UsersId', handleDeleteUser);
usersRouter.put('/profile',handleUpdateProfile)
usersRouter.put('/imagen',handleUpdateImagen)

module.exports = usersRouter;

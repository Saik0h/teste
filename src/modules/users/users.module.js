import { Module } from '../../core/app/index.js'
import UsuariosController from "./users.controller.js";

const usersController = new UsuariosController();

export const usuariosConfig = {
  name: 'Usuarios',
  routeMiddlewares: [],
  prefix: '/usuarios',
  routes: [
    {
      method: 'PATCH',
      path: '/:id',
      handler: usersController.updateUser,
    },
    {
      method: 'GET',
      path: '',
      handler: usersController.getAllUsers,
    },
    {
      method: 'GET',
      path: '/:id',
      handler: usersController.getUserById,
    },
    {
      method: 'DELETE',
      path: '/:id',
      handler: usersController.deleteUser,
    },
  ],
};

const UsersModule = new Module(usuariosConfig);
export default UsersModule
import { Module } from '../../core/app/index.js'
import UsersController from "./users.controller.js";
import UsersService from './users.service.js';
const usersController = new UsersController()
export const usuariosConfig = {
  name: 'Usuarios',
  routeMiddlewares: [],
  controller: UsersController,
  services: [UsersService],
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
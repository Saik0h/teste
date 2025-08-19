import Module from "../../../_lib/Module_Initializer.js";
import UsuariosController from "./users.controller.js";

const usersController = new UsuariosController();

export const usuariosConfig = {
  name: 'Usuarios',
  globalMiddlewares: [],
  prefix: '/usuarios',           
  routes: [
    {
      method: 'POST',
      path: '/',
      handler: usersController.createUser,
    },
    {
      method: 'GET',
      path: '/',
      handler: usersController.getAllUsers,
    },
    {
      method: 'GET',
      path: '/:id',
      handler: usersController.getUserById,
    },
  ],
};

const UsersModule = new Module(usuariosConfig);
export default UsersModule
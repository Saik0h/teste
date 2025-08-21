import { Module } from '../../core/app/index.js'
import AuthController from "./auth.controller.js";
import AuthService from './auth.service.js';

const authController = new AuthController();

export const authModuleConfig = {
  name: 'Auth',
  globalMiddlewares: [],
  controller: AuthController,
  services: [AuthService],
  prefix: '/auth',
  routes: [
    {
      method: 'POST',
      path: '/register',
      handler: authController.register,
    },
    {
      method: 'POST',
      path: '/login',
      handler: authController.login,
    },
    {
      method: 'POST',
      path: '/refresh',
      handler: authController.refresh,
    }, {
      method: 'POST',
      path: '/logout',
      handler: authController.logout,
    },
  ],
};

const AuthModule = new Module(authModuleConfig);
export default AuthModule;
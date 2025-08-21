import { Module } from '../classes/index.js'
import AppController from "./app.controller.js";

const appController = new AppController();

export const appModuleConfig = {
  name: 'My-App',
  globalMiddlewares: [],
  prefix: '/',
  routes: [
    {
      method: 'GET',
      path: '',
      handler: appController.getHello,
    },
  ],
};

const appModule = new Module(appModuleConfig);
export default appModule
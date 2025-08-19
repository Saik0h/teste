import { Router } from 'express';

const VALID_METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

export default class Module {
  constructor(config) {
    this.name = config.name || 'Module';
    this.router = config.router || Router();
    this.globalMiddlewares = config.globalMiddlewares || [];
    this.routes = config.routes || [];
    this.prefix = config.prefix || '';
    
    this._setupRoutes();
  }

  _setupRoutes() {
    for (const route of this.routes) {
      const { method, path, handler, middlewares = [], subRoutes = [] } = route;
      if (!VALID_METHODS.includes(method.toUpperCase())) {
        throw new Error(`Método HTTP inválido: ${method} na rota ${path}`);
      }
      
      const fullPath = `${this.prefix}${path}`;
      
      this.router[method.toLowerCase()](
        fullPath,
        ...this.globalMiddlewares,
        ...middlewares,
        handler
      );

      for (const sub of subRoutes) {
        const {
          method: subMethod,
          path: subPath,
          handler: subHandler,
          middlewares: subMiddlewares = [],
        } = sub;

        if (!VALID_METHODS.includes(subMethod.toUpperCase())) {
          throw new Error(`Método HTTP inválido: ${subMethod} na subrota ${subPath}`);
        }

        const subFullPath = `${fullPath}${subPath}`;

        this.router[subMethod.toLowerCase()](
          subFullPath,
          ...this.globalMiddlewares,
          ...middlewares, 
          ...subMiddlewares,
          subHandler
        );

      }
    }
  }
}
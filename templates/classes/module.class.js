import { Router } from 'express';

const VALID_METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

export default class Module {
  constructor(config) {
    this.name = config.name || 'Module';
    this.router = config.router || Router();
    this.routeMiddlewares = config.routeMiddlewares || [];
    this.routes = config.routes || [];
    this.prefix = config.prefix || '';
    this.guards = config.guards || [];
    this.interceptors = config.interceptors || [];

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
        ...this.routeMiddlewares,
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
          ...this.routeMiddlewares,
          ...middlewares,
          ...subMiddlewares,
          subHandler
        );

      }
    }
  }
}
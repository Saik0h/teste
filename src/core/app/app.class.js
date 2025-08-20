import express from 'express';

export default class App {
    constructor(configs = {}) {
        this.server = express();
        this.modules = configs.modules || [];
        this.globalGuards = configs.globalGuards || [];
        this.globalInterceptors = configs.globalInterceptors || [];
        this.parsers = [express.json(), ...configs.parsers || []];
        this.globalMiddlewares = configs.globalMiddlewares || [];
        this.globalErrorHandlers = configs.globalErrorHandlers || [];
        this.prefix = configs.globalPrefix || '';
        this.PORT = configs.PORT || 3000;

        this.appSchema = {};
    }

    run() {
        this.setupParsers();        
        this.setupGlobalMiddlewares(); 
        this.setupGlobalGuards();     
        this.loadModules();         
        this.setupResponseInterceptors(); 
        this.setupErrorHandlers();


        console.log('Application Schema:', JSON.stringify(this.appSchema, null, 2));
        this.server.listen(this.PORT, () =>
            console.log(`Server is running on port ${this.PORT}`)
        );
    }

    setupParsers() {
        this.parsers.forEach(parser => this.server.use(parser));
        this.appSchema.parsers = this.parsers.map(parser => parser.name);
    }

    loadModules() {
        this.modules.forEach(module => this.loadModule(module));
        this.appSchema.modules = this.modules.map(module => module.name);
    }

    loadModule(module) {
        this.server.use(this.prefix, module.router);
        console.log(`Module ${module.name} Successfully loaded!`);

        const modulePath = module.prefix ? `${this.prefix}${module.prefix}` : this.prefix;
        module.routes.forEach(route =>
            console.log(`Route Mapped: ${route.method.toUpperCase()} ${modulePath}${route.path}`)
        );
    }

    setupGlobalMiddlewares() {
        this.globalMiddlewares.forEach(middleware => this.server.use(middleware));
        this.appSchema.middlewares = this.globalMiddlewares.map(middleware => middleware.name);
    }

    setupErrorHandlers() {
        this.globalErrorHandlers.forEach(errorHandler => this.server.use(errorHandler));
        this.appSchema.errorHandlers = this.globalErrorHandlers.map(errorHandler => errorHandler.name);
    }

    setupGlobalGuards() {
        this.globalGuards.forEach(guard => this.server.use(guard));
        this.appSchema.guards = this.globalGuards.map(guard => guard.name);
    }

    setupResponseInterceptors() {
        this.globalInterceptors.forEach(interceptor => this.server.use(interceptor));
        this.appSchema.responseInterceptors = this.globalInterceptors.map(interceptor => interceptor.name);
    }
}
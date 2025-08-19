import express from 'express';

export default function createApp(config = {}) {
    const app = express()

    const { prefix, preMiddlewares, postMiddlewares, modules } = config;

    app.use(...preMiddlewares)

    modules.forEach(module => {
        const modulePath = module.prefix ? `${prefix}${module.prefix}` : prefix;
        app.use(prefix, module.router);

        console.log(`Module ${module.name} Successfully loaded!`);

        module.routes.forEach(route =>
            console.log(`Route Mapped: ${route.method.toUpperCase()} ${modulePath}${route.path}`)
        );
    });

    app.use(...postMiddlewares)

    return app;
}
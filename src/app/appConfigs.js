import express from 'express';
import loggerMiddleware from '../app/common/middleware/logger.middleware.js';
import errorHandler from '../app/common/middleware/error.middleware.js';
import UsersModule from './modules/users/users.module.js';
import AuthModule from './modules/auth/auth.module.js';
import UrlModule from './modules/URLS/url.module.js';

export const APP_CONFIG = {
    prefix: '/api',
    preMiddlewares:[
        express.json(),
        loggerMiddleware
    ],    
    modules: [
        AuthModule,
        UsersModule,
        UrlModule
    ],
    postMiddlewares: [
        errorHandler
    ]
}

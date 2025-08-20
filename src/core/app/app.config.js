import loggerMiddleware from '../middlewares/logger.middleware.js';
import errorHandler from '../error/errorHandler.js';
import authGuard from '../guards/auth.guard.js';
import UsersModule from '../../modules/users/users.module.js';
import AuthModule from '../../modules/auth/auth.module.js';
import UrlModule from '../../modules/URLS/url.module.js';
import cookieParser from 'cookie-parser';

 const APP_CONFIG = {
    globalPrefix: '/api',
    PORT: process.env.PORT || 3000,
    parsers: [cookieParser()],
    globalGuards: [authGuard],
    globalInterceptors: [],
    globalMiddlewares: [
        loggerMiddleware
    ],
    modules: [
        AuthModule,
        UsersModule,
        UrlModule
    ],
    globalErrorHandlers: [
        errorHandler
    ]
}


export default APP_CONFIG;
import appModule from "../core/app";

 const APP_CONFIG = {
    globalPrefix: '',
    PORT: process.env.PORT || 3000,
    parsers: [],
    globalGuards: [],
    globalInterceptors: [],
    globalMiddlewares: [],
    modules: [appModule],
    globalErrorHandlers: []
}

export default APP_CONFIG;
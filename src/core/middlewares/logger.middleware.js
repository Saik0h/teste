const loggerMiddleware = (req, res, next) => {
    req["user"] = { ip: req.ip };
    req["date"] = new Date();
    console.log(`Usuário com IP: ${req.ip} acessou a rota ${req.originalUrl} em ${req.date}`);
    next();
}

export default loggerMiddleware;
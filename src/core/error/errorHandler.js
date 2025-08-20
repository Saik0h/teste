const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        message: 'Ocorreu um erro interno no servidor',
        error: err.message,
    });
}

export default errorHandler;
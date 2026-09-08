function notFoundHandler (req, res, next) {
    const error = new Error(req.originalUrl);

    error.status = 404;

    next(error);
}

function finalErrorHandler (err, req, res, next) {
    console.log(err);

    const status = err.status || 500;

    res.status(status).json({
        status,
        error: true,
        message: status === 500 ? 
            "Internal Server Error (Check Server Logs)" :
            err.message,
    })
}

export { notFoundHandler, finalErrorHandler };

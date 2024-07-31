export const errorLogger = (error, req, res, next) => {
    console.error(error.statusCode || 500, error.stack);
    return next(error);
};

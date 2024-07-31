export const standardErrorResponser = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.customMessage || error.message || 'Something went wrong';

    res.status(statusCode).json({ message });
};

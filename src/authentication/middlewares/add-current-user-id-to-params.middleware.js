import jsonwebtoken from 'jsonwebtoken';

export const addCurrentUserIdToParams = (req, res, next) => {
    try {
        const { token } = req.body;
    
        const decoded = jsonwebtoken.decode(token);

        req.params.id = decoded.id;

        return next();
    } catch (error) {
        next(error);
    }
};
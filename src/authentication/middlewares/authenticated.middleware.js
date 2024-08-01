import jsonwebtoken from 'jsonwebtoken';
import { NotAuthenticatedError } from '../../errors/models/not-authenticated-errror.model.js';
import { WEB_TOKEN_SECRET_KEY } from '../../../config.js';

export const authenticated = (req, res, next) => {
    try {
        const { token } = req.body;
    
        jsonwebtoken.verify(token, WEB_TOKEN_SECRET_KEY);

        return next();
    } catch (error) {
        next(new NotAuthenticatedError());
    }
};

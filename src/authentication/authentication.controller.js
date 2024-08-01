import * as authenticationService from './authentication.service.js';

export const signIn = async (req, res, next) => {
    try {
        const { login, password } = req.body;

        const token = await authenticationService.authenticateUser(login, password);

        return res.json({ token });
    } catch (error) {
        return next(error);
    }
};

export const signUp = async (req, res, next) => {
    try {
        const { login, password } = req.body;

        const newUser = await authenticationService.registerNewUser(login, password);

        return res.json(newUser);
    } catch (error) {
        return next(error);
    }
};

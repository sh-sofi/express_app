import * as usersService from "./users.service.js";

export const findAll = async (req, res, next) => {
    try {
        const users = await usersService.getAllUsers();

        return res.json(users);
    } catch (error) {
        return next(error);
    }
};

export const findById = async (req, res, next) => {
    try {
        const userId = req.params.id;

        const user = await usersService.getUserById(userId);

        return res.json(user);
    } catch (error) {
        return next(error);
    }
};

export const create = async (req, res, next) => {
    try {
        const userBody = req.body;

        const user = await usersService.create(userBody);

        return res.json(user);
    } catch (error) {
        return next(error);
    }
};

export const update = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const userBody = req.body;
    
        const user = await usersService.update(userId, userBody);

        return res.json(user);
    } catch (error) {
        return next(error);
    }
};

export const remove = async (req, res, next) => {
    try {
        const userId = req.params.id;

        const user = await usersService.remove(userId);

        return res.json(user);
    } catch (error) {
        return next(error);
    }
};

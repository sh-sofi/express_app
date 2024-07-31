import { BadRequestError } from "../errors/models/bad-request-error.model.js";
import { NotFoundError } from "../errors/models/not-found-error.model.js";
import * as usersRepository from "./users.repository.js";

export const getAllUsers = () => {
    return usersRepository.findAll();
};

export const getUserById = async (userId) => {
    const user = await usersRepository.findById(userId);

    if (!user) {
        throw new NotFoundError('User not found');
    }

    return user;
};

export const create = async (user) => {
    const possibleUser = await usersRepository.findByLogin(user.login);

    if (possibleUser) {
        throw new BadRequestError('Specified login is already in use');
    }

    return usersRepository.create(user);
};

export const update = async (userId, userData) => {
    const user = await usersRepository.findById(userId);
    return usersRepository.update(user.id, userData);
}

export const remove = (userId) => {
    return usersRepository.remove(userId);
};

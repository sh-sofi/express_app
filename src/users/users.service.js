import * as usersRepository from "./users.repository.js";

export const getAllUsers = () => {
    return usersRepository.findAll();
};

export const getUserById = (userId) => {
    return usersRepository.findById(userId);
};

export const create = (user) => {
    return usersRepository.create(user);
};

export const update = async (userId, userData) => {
    const user = await usersRepository.findById(userId);
    return usersRepository.update(user.id, userData);
}

export const remove = (userId) => {
    return usersRepository.remove(userId);
};

import { db } from "../../db.js";

export const findAll = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM users', (err, rows) => {
            if (err) {
                reject(err.message);
                return;
            }

            resolve(rows);
        });
    });
};

export const findById = (id) => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM users WHERE id = ${id}`, (err, row) => {
            if (err) {
                reject(err.message);
                return;
            }

            if (row === undefined) {
                reject('User was not found');
            }

            resolve(row);
        });
    });
}

export const create = (user) => {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO users (login,role) VALUES(?, ?)', [user.login, user.role], (err) => {
            if (err) {
                reject(err.message);
                return;
            }

            resolve('User was created');
        });
    });
};

export const update = (id, user) => {
    return new Promise((resolve, reject) => {
        db.run('UPDATE users SET role=? WHERE id=?', [user.role, id], (err) => {
            if (err) {
                reject(err.message);
                return;
            }

            resolve('User was updated');
        });
    });
};

export const remove = (id) => {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM users WHERE id=?', [id], (err) => {
            if (err) {
                reject(err.message);
                return;
            }

            resolve('User was removed');
        });
    });
};

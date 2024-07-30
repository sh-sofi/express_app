const USERS = [
    {
        login: 'user-test',
        role: 'user',
    },
    {
        login: 'user2-test',
        role: 'user',
    },
    {
        login: 'limited-user-test',
        role: 'limited-user',
    },
    {
        login: 'admin-test',
        role: 'admin',
    },
];

export const findAll = (req, res) => {
    return res.json(USERS);
};

export const findByLogin = (req, res) => {
    const login = req.params.login;

    const user = USERS.find(user => user.login === login);

    if(user === undefined) {
        return res.status(404).json({
            message: 'The user was not found'
        });
    }

    return res.json(user);
};

export const create = (req, res) => {
    const userBody = req.body;

    USERS.push({
        login: userBody.login,
        role: userBody.role,
    });

    return res.json(USERS[USERS.length - 1]);
};

export const update = (req, res) => {
    const login = req.params.login;

    const userId = USERS.findIndex(user => user.login === login);
    
    if (userId === -1) {
        return res.status(404).json({
            message: 'The user was not found'
        });
    }

    const userBody = req.body;

    USERS[userId] = {
        ...USERS[userId],
        role: userBody.role
    };

    return res.json(USERS[userId]);
};

export const remove = (req, res) => {
    const login = req.params.login;

    const userId = USERS.findIndex(user => user.login === login);

    if (userId === -1) {
        return res.status(404).json({
            message: 'The user was not found'
        });
    }

    USERS.splice(userId, 1);

    return res.status(200).json();
};
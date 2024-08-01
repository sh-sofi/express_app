import express from 'express';
import './db.js';
import * as usersController from './src/users/users.controller.js';
import * as authenticationController from './src/authentication/authentication.controller.js';
import { errorLogger } from './src/errors/middlewares/error-logger.middleware.js';
import { standardErrorResponser } from './src/errors/middlewares/standard-error-responser.middleware.js';
import { authenticated } from './src/authentication/middlewares/authenticated.middleware.js';
import { hasRole } from './src/authorization/middlewares/has-role.middleware.js';
import { addCurrentUserIdToParams } from './src/authentication/middlewares/add-current-user-id-to-params.middleware.js';
import { PUBLIC_PORT, SESSION_SECRET_KEY } from './config.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
//import MongoStore from 'connect-mongo';

const PORT = PUBLIC_PORT;

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

app.use(cookieParser());

// const sessionStore = MongoStore({
//     mongoUrl: 'mongodb://localhost/your-database',
//     collectionName: 'sessions',
//     ttl: 60 * 60,
// });

app.use(session({
    secret: SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    //store: sessionStore,
}));

app.use('/media', express.static('public'));

app.use((req, res, next) => {
    console.log(req.method);

    next();
});

app.get('/', (req, res) => {
    res.render('pages/index', {
        courseName: 'Node.js Basic',
        lessonName: 'Express.js Basic'
    });
});

app.post('/signin', authenticationController.signIn);
app.post('/signup', authenticationController.signUp);

app.get('/users/me', authenticated, hasRole('limited_user'), addCurrentUserIdToParams, usersController.findById);
app.get('/users', authenticated, hasRole('admin'), usersController.findAll);
app.get('/users/:id', authenticated, hasRole('admin'), usersController.findById);
app.post('/users', authenticated, hasRole('admin'), usersController.create);
app.put('/users/:id', authenticated, hasRole('admin'), usersController.update);
app.delete('/users/:id', authenticated, hasRole('admin'), usersController.remove);

app.use(errorLogger);
app.use(standardErrorResponser);

app.listen(PORT, () => {
    console.log('Server successfuly started on port ' + PORT);
});


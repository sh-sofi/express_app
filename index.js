import express from 'express';
import './db.js';
import * as usersController from './src/users/users.controller.js';

const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

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

app.get('/users', usersController.findAll);
app.get('/users/:id', usersController.findById);
app.post('/users', usersController.create);
app.put('/users/:id', usersController.update);
app.delete('/users/:id', usersController.remove);

app.listen(PORT, () => {
    console.log('Server successfuly started on port ' + PORT);
});


import express from 'express';
import { create, findAll, findByLogin, remove, update } from './src/users/users.controller.js';

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

app.get('/users', findAll);
app.get('/users/:login', findByLogin);
app.post('/users', create);
app.put('/users/:login', update);
app.delete('/users/:login', remove);

app.listen(PORT, () => {
    console.log('Server successfuly started on port ' + PORT);
});


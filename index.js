const express = require('express');

const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');

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

app.listen(PORT, () => {
    console.log('Server successfuly started on port ' + PORT);
});


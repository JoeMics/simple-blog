const express = require('express');
const bodyParser = require('body-parser');
const postsRouter = require('./routes/postsRouter');
const adminRouter = require('./routes/adminRouter');
const homePage = require('./views/home');
const aboutPage = require('./views/about');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(postsRouter);
app.use(adminRouter);

app.get('/', (req, res) => {
    res.send(homePage());
});

app.get('/about', (req, res) => {
    res.send(aboutPage());
});

app.listen(3000);
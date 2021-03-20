const express = require('express');
const bodyParser = require('body-parser');
const postsRouter = require('./routes/postsRouter');
const adminRouter = require('./routes/adminRouter');
const homePage = require('./views/home');
const aboutRouter = require('./routes/aboutRouter');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(postsRouter);
app.use(adminRouter);
app.use(aboutRouter);

app.get('/', (req, res) => {
    res.send(homePage());
});

app.listen(3000);
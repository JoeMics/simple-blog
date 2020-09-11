const express = require('express');
const bodyParser = require('body-parser');
const postsRouter = require('./routes/postsRouter');
const layout = require('./views/layout');
const postsTemplate = require('./views/posts/posts');

const testRepo = require('./repositories/posts');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(postsRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});


app.listen(3000);
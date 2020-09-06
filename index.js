const express = require('express');
const layout = require('./views/layout');
const postsTemplate = require('./views/posts/posts');

const testRepo = require('./repositories/posts');

const app = express();

app.get('/', (req, res) => {
    res.send(postsTemplate());
});

app.listen(3000);
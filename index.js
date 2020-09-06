const express = require('express');
const postsRouter = require('./routes/postsRouter');
const layout = require('./views/layout');
const postsTemplate = require('./views/posts/posts');

const testRepo = require('./repositories/posts');

const app = express();

app.use(postsRouter);

app.get('/', (req, res) => {
    res.send(postsTemplate());
    console.log(req.body);
});


app.listen(3000);
const express = require('express');
const bodyParser = require('body-parser');
const postsRouter = require('./routes/postsRouter');
const adminRouter = require('./routes/adminRouter');
const layout = require('./views/layout')

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(postsRouter);
app.use(adminRouter);

app.get('/', (req, res) => {
    res.send(layout({ content: 'This is home'}));
});

app.listen(3000);
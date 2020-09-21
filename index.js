const express = require('express');
const bodyParser = require('body-parser');
const postsRouter = require('./routes/postsRouter');
const adminRouter = require('./routes/adminRouter');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(postsRouter);
app.use(adminRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});


app.listen(3000);
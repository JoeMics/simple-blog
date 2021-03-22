const express = require('express');
const postsRouter = require('./routes/postsRouter');
const homePage = require('./views/home');
const aboutRouter = require('./routes/aboutRouter');
const contactRouter = require('./routes/contactRouter');

const app = express();

app.use(express.static('public'));

app.use(postsRouter);
app.use(aboutRouter);
app.use(contactRouter);

app.get('/', (req, res) => {
    res.send(homePage());
});

let port = process.env.PORT;
if (port ==null || port == '') {
    port = 3000;
}
app.listen(port);
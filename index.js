const express = require('express');
const bodyParser = require('body-parser');
const postsRouter = require('./routes/postsRouter');
const adminRouter = require('./routes/adminRouter');
const homePage = require('./views/home');
const aboutRouter = require('./routes/aboutRouter');
const contactRouter = require('./routes/contactRouter');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(postsRouter);
app.use(adminRouter);
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
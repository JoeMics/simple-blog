const express = require('express');
const bodyParser = require('body-parser');
const postsRouter = require('./routes/postsRouter');
const adminRouter = require('./routes/adminRouter');
const testComment = require('./repositories/comments');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(postsRouter);
app.use(adminRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});

testComment.createComment('4a539fc5370c', {commentText: 'this is a comment', author: 'John Doe'});


app.listen(3000);
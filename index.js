const express = require('express');
const layout = require('./views/layout');
const postsTemplate = require('./views/posts/posts');

const testRepo = require('./repositories/posts');

const app = express();

app.get('/', (req, res) => {
    res.send(postsTemplate());
});

const testPost = async () =>{
    console.log(await testRepo.getOneBy({ id: '58648f26bd2a' }));
};
testPost();

app.listen(3000);
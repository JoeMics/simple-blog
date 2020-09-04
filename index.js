const express = require('express');
const layout = require('./views/layout');
const postsTemplate = require('./views/posts/posts');

const testRepo = require('./repositories/posts');

const app = express();

app.get('/', (req, res) => {
    res.send(postsTemplate());
});

const testPost = async () =>{
    console.log(await testRepo.getOne('866aa4e241a4'));
};
testPost();

app.listen(3000);
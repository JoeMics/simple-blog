const express = require('express');

const Posts = require('../repositories/posts');
const postsTemplate = require('../views/posts/posts');
const postTemplate = require('../views/posts/post');

router = express.Router();

router.get(`/posts`, async (req, res) => {
        // Show a list of all blog posts
        const allPosts = await Posts.getAll();

        res.send(postsTemplate(allPosts));        
    });

router.get('/posts/:postId', async (req, res) => {
    try {
        const { postId } = req.params;
        const blogPost = await Posts.getOne(postId);
    
        res.send(postTemplate(blogPost));
    } catch(error) {
        res.send('Post not found!');
        console.log(error);
    }
});

module.exports = router;
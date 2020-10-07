const express = require('express');

const postsRepo = require('../repositories/posts');
const postsTemplate = require('../views/posts/posts');
const commentsTemplate = require('../views/posts/comments');

router = express.Router();

router.get(`/posts`, async (req, res) => {
        // Show a list of all blog posts
        const allPosts = await postsRepo.getAll();

        res.send(postsTemplate(allPosts));        
    });

router.get('/posts/:postId', async (req, res) => {
    try {
        const { postId } = req.params;
        const blogPost = await postsRepo.getOne(postId);
    
        res.send(postsTemplate(blogPost) + commentsTemplate());
    } catch {
        res.send('Post not found!');
    }
});

module.exports = router;
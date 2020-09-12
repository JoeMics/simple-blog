const express = require('express');

const postsRepo = require('../repositories/posts');
const postsTemplate = require('../views/posts/posts');

router = express.Router();

router.get(`/posts`, async (req, res) => {
    if (req.query.post) {
        // Show full post if query string post
        // full post will have a comment section
        const postId = req.query.post;
        const blogPost = await postsRepo.getOne(postId);

        console.log(blogPost);

        res.send(postsTemplate(blogPost));
    } else {
        // Show a list of all blog posts
        const allPosts = await postsRepo.getAll();

        console.log(allPosts);

        res.send(postsTemplate(allPosts));
        
    }
    
});

module.exports = router;
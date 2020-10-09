const express = require('express');

const Posts = require('../repositories/posts');
const postsTemplate = require('../views/posts/posts');
const commentsTemplate = require('../views/posts/comments');

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
    
        res.send(postsTemplate(blogPost) + commentsTemplate());
    } catch {
        res.send('Post not found!');
    }
});

router.post('/posts/:postId', (req, res) => {
    const { author, commentBody } =  req.body;
    console.log(author);
    console.log(commentBody);
    console.log(req.path.split('/')[2]);
    //refresh the page
    res.redirect('back');
});

module.exports = router;
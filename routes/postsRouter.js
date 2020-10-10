const express = require('express');

const Posts = require('../repositories/posts');
const Comments = require('../repositories/comments');
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
    
        res.send(postsTemplate(blogPost) + await commentsTemplate(blogPost));
    } catch(error) {
        res.send('Post not found!');
        console.log(error);
    }
});

//handles post request for comment submission
router.post('/posts/:postId', async (req, res) => {
    const { author, commentBody } =  req.body;
    const postId = req.path.split('/')[2];

    await Comments.createComment(postId, { 
        author, 
        commentText: commentBody });
        
    //refresh the page
    res.redirect('back');
});

module.exports = router;
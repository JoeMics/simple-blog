const express = require('express');
const multer = require('multer');

const postsRepo = require('../repositories/posts');
const postsTemplate = require('../views/posts/posts');

router = express.Router();

// Currently handling text-only
// Add images in the future
const upload = multer().none();

router.get(`/posts`, async (req, res) => {
    if (req.query.post) {
        // Show full post if query string post
        // full post will have a comment section
        const postId = req.query.post;
        const blogPost = await postsRepo.getOne(postId);

        res.send(postsTemplate(blogPost));
    } else {
        // Show a list of all blog posts
        const allPosts = await postsRepo.getAll();

        res.send(postsTemplate(allPosts));
        
    }
    
});

router.get('/admin/create-post', async (req, res) => {
    res.send(`
    <form method="post" enctype="multipart/form-data"> 
        <label>Type here:</label>
        <input type="text" size="50" name="blogPostText">
    </form>
    `)
});

router.post('/admin/create-post', upload,  async (req, res) => {
    console.log(req.body.blogPostText);
})

module.exports = router;
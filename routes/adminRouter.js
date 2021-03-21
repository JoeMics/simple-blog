const express = require('express');
const multer = require('multer');
const Posts = require('../repositories/posts');
const createPostLayout = require('../views/admin/createPost');


router = express.Router();

// Currently handling text-only
// Add images in the future
const upload = multer().none();


router.get('/admin/create-post', async (req, res) => {
    res.send(createPostLayout());
});

router.post('/admin/create-post', async (req, res) => {
    const { title, textPost } = req.body;
    
    Posts.createPost({ title, textPost });
    res.redirect('/posts');
});

module.exports = router;
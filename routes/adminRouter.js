const express = require('express');
const multer = require('multer');
const postsRepo = require('../repositories/posts');
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
    console.log(title, textPost);
    
    postsRepo.create({ title, textPost });
    res.redirect('/posts');
})

module.exports = router;
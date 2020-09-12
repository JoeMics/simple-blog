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

router.post('/admin/create-post', upload,  async (req, res) => {
    const { blogPostText } = req.body;

    await postsRepo.create({ blogPostText });

    res.redirect('/posts');

})

module.exports = router;
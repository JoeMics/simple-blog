const express = require('express');
const multer = require('multer');


router = express.Router();

// Currently handling text-only
// Add images in the future
const upload = multer().none();


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
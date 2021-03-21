const express = require('express');
const { createComment } = require('../repositories/comments');

const createContactLayout = require('../views/contact');

router = express.Router();

router.get('/contact', async(req, res) => {
    res.send(createContactLayout());
});

module.exports = router;
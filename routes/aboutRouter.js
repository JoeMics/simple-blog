const express = require('express');
const createAboutLayout = require('../views/about');

router = express.Router();

router.get('/about', async (req, res) => {
    res.send(createAboutLayout());
})

module.exports = router;
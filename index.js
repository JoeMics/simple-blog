const express = require('express');
const layout = require('./views/layout');

const app = express();

app.get('/', (req, res) => {
    res.send(layout({ content: 'content here!' }));
});

app.listen(3000);
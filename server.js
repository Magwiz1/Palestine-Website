// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let comments = [];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const newComment = req.body.comment;

    if (!comments.includes(newComment)) {
        comments.push(newComment);
        res.status(201).json({ success: true });
    } else {
        res.status(400).json({ success: false, message: 'تعليق مكرر.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
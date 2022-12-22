const { resolve } = require('path');
const api = require('express').Router();

api.get('/api/users', (req, res) => {
    res.json({ name: 'coco' });
});

module.exports = api;

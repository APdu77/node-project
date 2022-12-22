const { resolve } = require('path');
const router = require('express').Router();

router.get('/home', (req, res) => {
    res.sendFile(resolve('public', 'index.html'));
});

router.get('/services', (req, res) => {
    res.sendFile(resolve('public', 'services.html'));
});

router.get('/contact', (req, res) => {
    res.sendFile(resolve('public', 'contact.html'));
});

router.get('*', (req, res) => {
    res.sendFile(resolve('public', 'page404.html'));
});

module.exports = router;
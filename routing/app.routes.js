const { resolve } = require('path');
const router = require('express').Router();
const { home , contact, services, defaultCtrl } = require('../controllers/app.controllers');

router.get('/home', home);

router.get('/contact', contact);

router.get('/services', services);

router.get('/defaultCtrl', defaultCtrl);

module.exports = router;
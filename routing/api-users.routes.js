const users = require('../controllers/api-users.controllers');
const apiUsersRoutes = require('express').Router();

apiUsersRoutes.get('/api/users', users);

module.exports = apiUsersRoutes;

const { users } = require('../database/data.json');

function usersCtrl (req, res) {
    res.json({
        nbUsers: users.length,
        users
    })
};

module.exports = usersCtrl;

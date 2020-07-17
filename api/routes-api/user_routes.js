const user_ctrl = require('../controllers/user_ctrl');
const auth_ctrl = require('../controllers/auth_ctrl');

module.exports = [
    {
        url: '/users',
        method: 'get',
        func: [auth_ctrl.isAuthenticated, auth_ctrl.isAdmin, user_ctrl.getAll],
    },

    {
        url: '/user',
        method: 'get',
        func: [auth_ctrl.isAuthenticated, user_ctrl.getCurrent],
    },

    {
        url: '/user',
        method: 'put',
        func: [auth_ctrl.isAuthenticated, user_ctrl.update],
    },
];

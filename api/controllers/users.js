const user = require('../models/user');
module.exports = () => {
    const controller = {};

    controller.listUsers = async (req, res) => {
        console.log(await user.getUsers());
    }
    return controller;
}
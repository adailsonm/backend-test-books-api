const db = require('../../config/database');

async function getUsers() {
    const data = await db.query('SELECT * FROM users');
    return data;
}


module.exports = {
    getUsers,
}

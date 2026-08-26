const mysql = require('mysql12/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projeto_backend_angela',
    port: 3306

});

module.exports = db;

const mysql = require('mysql');

const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'questionAnswer'
});

// connect to database
mc.connect();

module.exports = mc; 

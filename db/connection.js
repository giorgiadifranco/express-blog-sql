const mysql = require('mysql2');

const connection = mysql.createConnection({

    /*inserire host, user, password e database --> conservate in .env*/

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT



})

//gestione errore
connection.connect(err =>{
    if (err) throw err
    console.log('connected to my sql')

})
module.exports = connection;
const mysql = require('mysql2');

const connection = mysql.createConnection({

    /*inserire host, user, password e database --> conservate in .env*/

})

//gestione errore
connection.connect(err =>{
    if (err) throw err
    console.log('connected to my sql')

})
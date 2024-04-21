const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'bruza98xqy7xfhgosatc-mysql.services.clever-cloud.com',
    user: 'u3pyycaxyegeonna',
    password: 'nsVLeSydMHmjxzPZ4Qle',
    database: 'bruza98xqy7xfhgosatc'
});

// const connection = mysql.createPool({
//     host: 'sql.freedb.tech:3306',
//     user: 'freedb_Aman7693',
//     password: '3w?X$&XJg3gP56b',
//     database: 'freedb_doublekamaii'
// });

export default connection;

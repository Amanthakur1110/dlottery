const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'sql211.ezyro.rom',
    user: 'ezyro_35902012',
    password: 'Aman@7693',
    database: 'ezyro_35902012_doublekamaii'
});

// const connection = mysql.createPool({
//     host: 'sql.freedb.tech:3306',
//     user: 'freedb_Aman7693',
//     password: '3w?X$&XJg3gP56b',
//     database: 'freedb_doublekamaii'
// });

export default connection;
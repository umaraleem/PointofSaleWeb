const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12612292',
  password: 'VP71vujGCk',
  database: 'sql12612292',
  port:"3306",
});

// connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

module.exports={connection}
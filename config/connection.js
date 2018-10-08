var mysql = require("mysql");
let connection;
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "MS@Dc02830786",
//   database: "burgers_db"
  
// });

if(process.env.JAWDB_URL){
  connection = mysql.createConnection(process.env.JAWDB_URL);
}else{
  connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: 'MS@Dc02830786',
    database: 'burgers_db'
  })
}

// Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Export connection for our ORM to use.
connection.connect();
module.exports = connection;
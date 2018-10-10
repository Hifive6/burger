var mysql = require("mysql");
let connection;


if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: 'MS@Dc02830786',
    database: 'burgers_db'
  })
}

connection.connect();
module.exports = connection;

// mysql://a4wj57ywt8z6yt5l:wexbr7pswwccm2hz@tuy8t6uuvh43khkk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/x99rv7sf80e8uara
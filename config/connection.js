var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	user: "vanessaotto",
	password: "L2lah2l2lah2",
	database: "Burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

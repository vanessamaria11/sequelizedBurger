var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

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

app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgersTable;", function(err, data) {
    if (err) {
      throw err;
    }

    res.render("index", { burgersTable: data });

  });
});

app.post("/", function(req, res) {
  connection.query("INSERT INTO burgersTable (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});

app.delete("/:id", function(req, res) {
  connection.query("DELETE FROM burgersTable WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});

app.put("/", function(req, res) {

  connection.query("UPDATE burgersTable SET burger_name = ? WHERE id = ?", [
    req.body.burger, req.body.id
  ], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});

app.listen(port);
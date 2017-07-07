var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./models/index.js");

var PORT = process.env.PORT || 8080;

// Requiring our models for syncing

// Set express
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));


// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var route = require("./controllers/burger_controllers.js");

app.use("/", route);
app.use("/update", route);
app.use("/create", route);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

console.log(module.exports);
var express = require("express");
var router = express.Router();

var db = require("../models");

router.get("/", function(req, res){
	res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
	db.BurgerPost.findAll()
	.then(function(burgerInfo){
		console.log(burgerInfo);
		var handlebars = { burger: burgerInfo};
		return res.render("index", handlebars);
	});
});

router.post("/burgers/create", function(req, res){
	db.BurgerPost.create({
		burger_name: req.body.burger_name
	})
	.then(function(burgerInfo){
		console.log(burgerInfo);
		res.redirect("/");
	});
});

router.put("/burgers/update", function(req, res){
	db.BurgerPost.update({
		devoured: true
	},
	{
		where: {
			id: req.body.burger_id
		}
	}
	).then(function(burgerInfo){
		res.redirect("/");
	});
});

module.exports = router;
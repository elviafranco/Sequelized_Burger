// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring model
const db = require("../models");

// Routes
// =============================================================

module.exports = function(app) {
    
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(data){
            const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
    });
    
    app.post("/api/burgers", function(req, res) {
      db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
      }).then(function(result){
        console.log(result);
          res.json(result);
      });
    });
    
    app.put("/api/burgers/:id", function(req, res) {
      db.Burger.update({
        devoured: req.body.devoured,
      }, {
        where: {
            id: req.params.id
        }
      }).then(function(result){
        console.log(result);
        res.json(result);
      });
    });
    
      app.delete("/api/burgers/:id", function(req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(result){
            console.log(result);
            res.json(result);
        });
    });
}
const express = require("express");
var router = express.Router();

var Bottle = require("../models/bottle");

// Add new post
router.post("/bottle", (req, res) => {
    var db = req.db;
    var title = req.body.title;
    var description = req.body.description;
    var new_bottle = new Bottle({
        title: title,
        description: description
    });

    new_bottle.save(function(error) {
        if (error) {
            console.log(error);
        }
        res.send({
            success: true,
            message: "Bottle saved successfully!"
        });
    });
});

// Fetch all posts
router.get("/", (req, res) => {
    Bottle.find({}, "title description", function(error, posts) {
        if (error) {
            console.error(error);
        }
        res.send({
            posts: posts
        });
    }).sort({ _id: -1 });
});

// Fetch single post
router.get("/bottle/:id", (req, res) => {
    var db = req.db;
    Bottle.findById(req.params.id, "title description", function(
        error,
        bottle
    ) {
        if (error) {
            console.error(error);
        }
        res.send(bottle);
    });
});

// Update a post
router.put("/bottle/:id", (req, res) => {
    var db = req.db;
    Bottle.findById(req.params.id, "title description", function(
        error,
        bottle
    ) {
        if (error) {
            console.error(error);
        }

        bottle.title = req.body.title;
        bottle.description = req.body.description;
        bottle.save(function(error) {
            if (error) {
                console.log(error);
            }
            res.send({
                success: true
            });
        });
    });
});

router.delete("/bottle/:id", (req, res) => {
    var db = req.db;
    Bottle.remove(
        {
            _id: req.params.id
        },
        function(err, bottle) {
            if (err) res.send(err);
            res.send({
                success: true
            });
        }
    );
});

module.exports = router;
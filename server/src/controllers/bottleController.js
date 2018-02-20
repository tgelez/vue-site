var Bottle = require('../models/bottle');
require('../models/wine');
require('../models/appellation');
require('../models/region');
require('../models/producer');


// Display list of all Bottles.
exports.bottle_list = function(req, res) {
    // res.send('NOT IMPLEMENTED: Bottle list');
    Bottle.find({}, "wine _id", function(error, bottles) {
      if (error) {
        console.error(error);
      }
      else {
        console.log(bottles);
      }
      res.send({
        bottles: bottles
      })
    })
    .sort({ _id: -1 })
    .populate({
      path: 'wine',
      populate: {
        path: 'appellation',
        populate: {path: 'region'}
      }
    })

};

// Display detail page for a specific Bottle.
exports.bottle_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Bottle detail: ' + req.params.id);
};

/*
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
*/

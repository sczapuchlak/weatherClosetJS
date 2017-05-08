var express = require('express');
var router = express.Router();
var Outfit = require('../models/outfits.js');

// hello??

/* GET home page. */
router.get('/', function(req, res) {
   /* Outfit.find({complete_outfit: true}, function (err,tasks) {
        if (err){
            return next(err);
        }
    })*/
    res.render('index', { title: 'Weather Closet', outfits:Outfit });
});


//get personal page
router.get('/personalpage', function (req,res) {
    res.render('personalpage',{title: 'Personal Page',
    username: req.query.name});
    console.log(req.query)
});

//

//get daily weather page
router.get('/dailyweather', function (req,res) {
    res.render('dailyweather',{title:'Your daily weather style!',
    radioPicked:req.query.articleOfClothing,
    cityPicked:req.query.cityAndState});
    console.log(req.query);

});
/*TODO - add button for them to be able to add a favorite outfits and a button
 to delete that favorite just in case they change their mind later on down the road
 */

module.exports = router;

var express = require('express');
var router = express.Router();
var Outfit = require('../models/outfits.js');

// hello??

/* GET home page. */
router.get('/', function(req, res, next) {
    Outfit.find({complete_outfit: true}, function (err,tasks) {
        if (err){
            return next(err);
        }
    })
/*    var dollars= "this is what i said";
    res.send(dollars);*/
    res.render('index', { title: 'Weather Closet', outfits:Outfit });
});


//transfer to personal page
router.get('/personalpage', function (req,res, next) {
    res.render('personalpage')
});


/*TODO - add button for them to be able to add a favorite outfits and a button
 to delete that favorite just in case they change their mind later on down the road
 */

module.exports = router;

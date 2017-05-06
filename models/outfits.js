var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define the schema
var outfitSchema = new Schema({
    jacket: String,
    bottoms: String,
    shoes: String,
    accessory: String,
    weather_type: String,
    event_type: String,
    complete_outfit: Boolean
});
//Compile the outfit schema into a mongoose model... the name will be 'Outfit'
var Outfit = mongoose.model('Outfit', outfitSchema);

//add the export module so other parts of the code can use it
module.exports = Outfit;
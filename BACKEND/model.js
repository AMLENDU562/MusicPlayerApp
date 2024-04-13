var mongoose = require('mongoose');
var imageSchema = new mongoose.Schema({
    name:String,
    img:
    {
        data: String,
        contentType: String
    },
    aud:
    {
        data: String,
        contentType: String
    }
});
 
module.exports = mongoose.model('Image', imageSchema);
var mongoose = require('mongoose');


var PostSchema = new mongoose.Schema({
    name: {type:String, default: ''},
    episode: {type:String, default: ''},
    image: {type:String, default: ''},
    timestamp: {type:Date, default:Date.now}


})





module.exports = mongoose.model('PostSchema', PostSchema)

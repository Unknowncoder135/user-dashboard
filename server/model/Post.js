const mongoose = require('mongoose')

const Postschema = new mongoose.Schema({
    name:
    {type : String, required: true},
    username:
    {type : String, required: true},
    email:
    {type : String, required: true},
    phone:
    {type : Number, required: true},
    website:
    {type : String, required: true}
    
})

module.exports =  mongoose.model('Post', Postschema)
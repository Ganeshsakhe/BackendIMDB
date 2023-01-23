const mongoose = require('mongoose')

const ActorSchema = new mongoose.Schema({
    name:
    {
        required:true,
        type:String,
    },
   Gender:
    {
        required:true,
        type:String, 
    },
    DOB:
    {
        required:true,
        type:Number,
    },
    BIO:{
        required:true,
        type:String,
    },
})

module.exports = mongoose.model("Actor", ActorSchema)
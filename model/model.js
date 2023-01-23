const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema
({
    Moviename: 
    {
        required: true,
        type: String
    },
    YOR: {
        required: true,
        type: Number
    },
    Plot:{
        required: true,
        type: String
    },
    Poster:{
        required: true,
        type: String
    },
    
    function validateform()
    {
        if (dataSchema == Invalid)
        {  
          alert("Actor doen't exist");  
          return false;  
        }
        else if(Actorname)
        {  
            res.status(200).json(dataSchema)
            success: true;
            message: 'Author found Successful'
        }
    }

module.exports = mongoose.model('Data', dataSchema)
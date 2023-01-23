const mongoose = require('mongoose')

const ProducerSchema = new mongoose.Schema({
    name:
    {
        required:true,
        type:String
    },
    Gender:
    {
       required: true,
       type:String
    },
    DOB:
    {
        required:true,
        type:Number,
    },
    BIO: 
    {
        required:true,
        type:String
    }
})

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


module.exports = mongoose.model('Producer', ProducerSchema)
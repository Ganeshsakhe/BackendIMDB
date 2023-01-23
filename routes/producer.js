const express = require('express')
const Model = require('../model/producer')
const router = express.Router()

router.post('/Post', async (req, res) =>
{
    const data = new Model({
        name: req.body.name,
        Gender: req.body.Gender,
        DOB: req.body.DOB,
        BIO: req.body.BIO
    })
    try 
    {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router
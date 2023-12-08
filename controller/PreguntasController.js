const {response}=require('express')
const PreguntasDTO = require('../models/PreguntasDTO')

const findAll=async(req,res=response)=>{
    try {
        const response=await PreguntasDTO.findAll()
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={
    findAll
}
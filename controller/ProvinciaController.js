const {response}=require('express')
const ProvinciaDTO = require('../models/PronviciaDTO')

const findAll=async(req,res=response)=>{
    try {
        const response=await ProvinciaDTO.findAll()
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={
    findAll
}
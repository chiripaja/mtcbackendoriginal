const {response}=require('express')
const DistritoDTO = require('../models/DistritoDTO')



const findall=async(req,res)=>{
    try {
        const response=await DistritoDTO.findAll()
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const findByIdProvincia=async(req,res=response)=>{
   
    try {
        const response=await DistritoDTO.findAll({
            where: {
                idprovincia:req.params.id
            }
        })
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={
    findall,
    findByIdProvincia
}
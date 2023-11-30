const {response}=require('express')
const PobladoDTO = require('../models/PobladoDTO')


const findByUbigeo=async(req,res=response)=>{
    try {
        const response=await PobladoDTO.findAll({           
            where: {
                ubigeo:req.params.id
            }
          })
          console.log(response)
          res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const findall=async(req,res)=>{
    try {
        const response=await PobladoDTO.findAll()
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const findbyid=async(req,res)=>{
    try {
        const response=await PobladoDTO.findByPk(req.params.id)
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={
    findByUbigeo,
    findall,
    findbyid
}
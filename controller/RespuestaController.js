const {response}=require('express');
const RespuestasDTO = require('../models/RespuestasDTO');


const create=async(req,res=response)=>{
    try {
        const { respuesta, preguntasid } = req.body;
        const response = await RespuestasDTO.create({ respuesta: respuesta,preguntasid:preguntasid });
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={
    create
}
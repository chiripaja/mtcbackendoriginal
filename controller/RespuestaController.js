const {response}=require('express');
const RespuestasDTO = require('../models/RespuestasDTO');


const create=async(req,res=response)=>{
    try {
        const { 
            respprov,
            resdistrito,
            respccpp,
            respiiee,
            resinternet,
            ressproveedor,
            resvelocidad,
            respermite,
            resproblem,
            resresponsable,
            rescosto,
            resnomape,
            ressexo,
            resnumcelular,
            rescorreo
        } = req.body;
        const response = await RespuestasDTO.create({ 
            respprov: respprov,
            resdistrito:resdistrito,
            respccpp:respccpp,
            respiiee:respiiee,
            resinternet:resinternet,
            ressproveedor:ressproveedor,
            resvelocidad:resvelocidad,
            respermite:respermite,
            resproblem:resproblem,
            resresponsable:resresponsable,
            rescosto:rescosto,
            resnomape:resnomape,
            ressexo:ressexo,
            resnumcelular:resnumcelular,
            rescorreo:rescorreo
        });
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={
    create
}
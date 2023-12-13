const {response}=require('express');
const RespuestasDTO = require('../models/RespuestasDTO');
const { sequelize } = require('../sequilize/sequilize');
const { QueryTypes } = require('sequelize');


const create=async(req,res=response)=>{
    try {
        const { 
            respprov,
            resdistrito,
            respccpp,
            respiiee,
            resinternet,
            ressproveedor,
            respproveedorotro,
            resvelocidad,
            respermite,
            resproblem,
            resproblemotro,
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
            respproveedorotro:respproveedorotro,
            resvelocidad:resvelocidad,
            respermite:respermite,
            resproblem:resproblem,
            resproblemotro:resproblemotro,
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


const findall=async(req,res)=>{
    try {
        const response= await sequelize.query("SELECT r.id,p.provincia,d.distrito,ie.NombreIE,ie.NivelModalidad,r.resinternet,r.ressproveedor,r.respproveedorotro,r.resvelocidad,r.respermite,r.resproblem,r.resproblemotro ,r.resresponsable,r.rescosto,r.resnomape,r.ressexo,r.resnumcelular, r.rescorreo FROM respuesta r INNER JOIN provincias p on r.respprov=p.codigo INNER join distritos d on d.codigo=r.resdistrito inner join institucioneseducativas ie on ie.IdInstitucion=r.respiiee;", { type: QueryTypes.SELECT });
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}


module.exports={
    create,
    findall
}
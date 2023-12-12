const {response}=require('express')
const ColegioDTO = require('../models/ColegiosDTO')



const findall=async(req,res)=>{
    try {
        const response=await ColegioDTO.findAll()
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const findByCodigoUbicacionGeografica=async(req,res=response)=>{   
    try {
        const response=await ColegioDTO.findAll({
            attributes: ['IdInstitucion','CodigoModular','NombreIE','NivelModalidad'],
            where: {
                CodigoUbicacionGeografica:req.params.id
            },
            order: [['NombreIE', 'ASC']], 
        })
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}




module.exports={
    findall,
    findByCodigoUbicacionGeografica
}
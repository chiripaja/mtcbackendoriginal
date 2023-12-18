const {response}=require('express')
const MovilesDTO = require('../models/MovilesDTO')



const findByMovilesCentroPoblacion=async(req,res=response)=>{   
    try {
        const response=await MovilesDTO.findAll({
            where: {
                UBIGEO_CCPP:req.params.id
            }
        })
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={
    findByMovilesCentroPoblacion
}
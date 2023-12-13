const {response}=require('express');

const { sequelize } = require('../sequilize/sequilize');
const { QueryTypes } = require('sequelize');
const ProyectoDetalleDTO = require('../models/ProyectoDetalleDTO');


const create=async(req,res=response)=>{
    try {
        const { 
            idccpp,
            idproyecto
        } = req.body;
        const response = await ProyectoDetalleDTO.create({ 
            idccpp: idccpp,
            idproyecto:idproyecto
        });
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const Delete = async (req, res) => {
    try {
        const response = await ProyectoDetalleDTO.destroy({ where: { id: req.params.id } });
        if (response === 0) {
            return res.status(400).send({ success: false, message: 'Proyecto no existe' })
        }
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const findall = async (req, res = response) => {   
    try {
        const response = await ProyectoDetalleDTO.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}




module.exports={
    create,
    findall,
    Delete
}
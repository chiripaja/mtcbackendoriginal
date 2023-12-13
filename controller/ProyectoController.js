const {response}=require('express');

const { sequelize } = require('../sequilize/sequilize');
const { QueryTypes } = require('sequelize');
const ProyectoDTO = require('../models/ProyectoDTO');


const create=async(req,res=response)=>{
    try {
        const { 
            nomproyec,
            fechaini,
            fechafin,
            descripcionproyec,
            responsable,
            estado
        } = req.body;
        const response = await ProyectoDTO.create({ 
            nomproyec: nomproyec,
            fechaini:fechaini,
            fechafin:fechafin,
            descripcionproyec:descripcionproyec,
            responsable:responsable,
            estado:estado
        });
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const Delete = async (req, res) => {
    try {
        const response = await ProyectoDTO.destroy({ where: { id: req.params.id } });
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
        const response = await ProyectoDTO.findAll()
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
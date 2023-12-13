const { response } = require('express')
const UserDTO = require('../models/UserDTO')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const findall = async (req, res = response) => {
    
    try {
        const response = await UserDTO.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}
const finById=async(req,res)=>{
    try {  
      const response=await UserDTO.findByPk(req.params.id);
      res.json(response)
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    } 
  }

const create = async (req, res = response) => {
    try {
        const { usuario, password, nombre } = req.body;
        const [user, created] = await UserDTO.findOrCreate({
            where: { usuario: usuario },
            defaults: {
                usuario,
                password,
                nombre,
            },
        });
        if (!created) {
            return res.status(400).json({ ok: false, msj: "El usuario ya existe." })
        }
        res.status(201).json({
            ok: true,
            msj: "nuevo usuario Creado",
            data: user,
            creacion: created,
        });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const Update = async (req, res) => {
    try {
        const { usuario, password, nombre, rol } = req.body;
        const usuarioExiste = await UserDTO.findByPk(req.params.id);
        if (usuarioExiste) {
            const response = await UserDTO.update({ usuario, password, nombre, rol }, { where: { id: req.params.id } });
            res.json(response)
        } else {
            res.status(500).send({ success: false, message: 'usuario no existe.' });
        }
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const Delete = async (req, res) => {
    try {
        const response = await UserDTO.destroy({ where: { id: req.params.id } });
        if (response === 0) {
            return res.status(400).send({ success: false, message: 'usuario no existe' })
        }
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const auth = async (req, res) => {
    const { usuario, password } = req.body;
    try {
        const user = await UserDTO.findOne({ where: { usuario: usuario, password: password } })
        if (!user) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }
        const token = jwt.sign({ id: user.id, usuario: user.usuario }, process.env.SECRET_KEY, { expiresIn: '5h' })
        res.status(200).json(token)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = {
    findall,
    finById,
    auth,
    create,
    Update,
    Delete
}
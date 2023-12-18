// host + /api/proyecto

const {Router}=require('express')
const { findall, Delete,create, finById } = require('../controller/ProyectoController')

const router=Router()
router
    .post('/',create)
    .get('/',findall)
    .get('/:id',finById)
    .delete("/:id", Delete)

module.exports=router
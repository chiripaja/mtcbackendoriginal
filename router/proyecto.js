// host + /api/proyecto

const {Router}=require('express')
const { findall, Delete,create } = require('../controller/ProyectoController')

const router=Router()
router
    .post('/',create)
    .get('/',findall)
    .delete("/:id", Delete)

module.exports=router
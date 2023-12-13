// host + /api/proyectoDetalle

const {Router}=require('express')
const { findall,Delete, create} = require('../controller/ProyectoDetalleController')

const router=Router()
router
    .post('/',create)
    .get('/',findall)
    .delete("/:id", Delete)

module.exports=router
// host + /api/proyectoDetalle

const {Router}=require('express')
const { findall,Delete, create,findData} = require('../controller/ProyectoDetalleController')

const router=Router()
router
    .post('/',create)
    .get('/',findall)
    .delete("/:id", Delete)
    .get('/findData/:id',findData)
module.exports=router
// host + /api/poblado

const {Router}=require('express')
const { findByUbigeo, findall, findbyid,findByUbigeoName, findAllReporte } = require('../controller/PobladoController')
const router=Router()


router
    .get('/findByUbigeo/:id',findByUbigeo)
    .get('/:id',findbyid)
    .get('/',findall)
    .get('/findByUbigeoName/:id',findByUbigeoName)
    .get('/reporte/data',findAllReporte)

module.exports=router
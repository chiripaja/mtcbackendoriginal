// host + /api/poblado

const {Router}=require('express')
const { findByUbigeo, findall, findbyid } = require('../controller/PobladoController')
const router=Router()


router
    .get('/findByUbigeo/:id',findByUbigeo)
    .get('/:id',findbyid)
    .get('/',findall)

module.exports=router
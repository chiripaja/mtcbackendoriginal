// host + /api/distrito

const {Router}=require('express')
const { findall, findByIdProvincia } = require('../controller/DistritoController')

const router=Router()


router.get('/',findall)
router.get('/findByIdProvincia/:id',findByIdProvincia)


module.exports=router
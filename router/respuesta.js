// host + /api/respuesta

const {Router}=require('express')
const { create } = require('../controller/RespuestaController')
const router=Router()

router.post("/",create)

module.exports=router

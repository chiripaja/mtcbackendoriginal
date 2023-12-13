// host + /api/respuesta

const {Router}=require('express')
const { create, findall } = require('../controller/RespuestaController')
const router=Router()

router.post("/",create)
      .get("/",findall)

module.exports=router

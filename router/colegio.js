// host + /api/colegio

const {Router}=require('express')
const {findall, findByCodigoUbicacionGeografica } = require('../controller/ColegioController')

const router=Router()


router.get('/',findall)
      .get('/findByCodigoUbicacionGeografica/:id',findByCodigoUbicacionGeografica)


module.exports=router
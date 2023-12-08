// host + /api/encuesta

const {Router}=require('express')
const { findAll } = require('../controller/PreguntasController')


const router=Router()


router.get('/',findAll)


module.exports=router
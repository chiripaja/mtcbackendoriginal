// host + /api/moviles

const {Router}=require('express')
const { findByMovilesCentroPoblacion } = require('../controller/MovilesController')

const router=Router()


router.get('/:id',findByMovilesCentroPoblacion)

module.exports=router
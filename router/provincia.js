// host + /api/provincia

const {Router}=require('express')
const { findAll } = require('../controller/ProvinciaController')

const router=Router()


router.get('/',findAll)


module.exports=router
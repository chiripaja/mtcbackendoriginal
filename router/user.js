// host + /api/user

const {Router}=require('express')
const { findall, auth,create, finById, Update, Delete } = require('../controller/UserController')
const { authenticateToken } = require('../midleware/authMiddleware')
const router=Router()



router
    .get('/',authenticateToken,findall)
    .post('/',create)
    .get('/:id',finById)
    .put("/:id", Update)
    .delete("/:id", Delete)
    .post('/auth',auth)


module.exports=router


const express=require('express')
router=express.Router()
let {getBank,saveBank, getTrasaction, saveTransaction}=require('../controller/bankControler')

router.post('/bank/add',saveBank)
router.get('/bank/get',getBank)
router.get('/bank/trasaction/get', getTrasaction)
router.post('/bank/trasaction/add', saveTransaction)


module.exports=router
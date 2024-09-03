const express=require('express')

const router=express.Router();

const Controller=require('../controller/Usecontroller')

router.post('/AdminSignUp',Controller.AdminSignUp)
router.get('/AdminDisplay',Controller.AdminDisplay)
router.put('/AdminUpdate/:id',Controller.AdminUpdate)
router.delete('/AdminDelete/:id',Controller.AdminDelete)

module.exports=router;



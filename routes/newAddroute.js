//routes
const express = require('express')
const router = express.Router()
// const User = require('../models/usermodel')
const {readFoods,readFoodbyId,readFoodbyName,createFood,updateFood,deleteFood} = require('../controllers/newAddcont')

//read all
router.get('/', readFoods)
router.get('/:ID',readFoodbyId)
//router.get('/:NAME',readFoodbyName)
router.post('/',createFood)
router.put('/:ID',updateFood)
router.delete('/:ID',deleteFood)


module.exports = router;
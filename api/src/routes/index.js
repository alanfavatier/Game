
const express = require('express');
const router = express.Router();
 const usersRouter = require('./usersRouter'); 
const productRouter = require('./productRouter');
const cartRouter = require('./cartRouter');
const ordersRouter = require('./ordersRouter');
const authController = require('../controllers/authController');


router.post('/login', authController.loginUser);
router.use('/users', usersRouter); 
router.use("/products", productRouter);
router.use('/cart', cartRouter);
router.use('/orders', ordersRouter);

module.exports = router;
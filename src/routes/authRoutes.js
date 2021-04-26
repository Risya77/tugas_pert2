const authRoutes =  require('express').Router();
const authController = require('../controllers/authControllers')

authRoutes.post("/sign-up", authController.signup);
authRoutes.post("/sign-in", authController.signin);

module.exports=authRoutes;
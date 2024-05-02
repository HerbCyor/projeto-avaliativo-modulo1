const { Router } = require("express");
const { validateSignUp } = require("../middlewares/ValidateSignUp");

const UserController = require("../controllers/UserController")
const userRoutes = new Router()

userRoutes.post('/', validateSignUp, UserController.signUp)

module.exports = userRoutes
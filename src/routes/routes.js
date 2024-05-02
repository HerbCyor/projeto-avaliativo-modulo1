const { Router } = require('express')
const routes = new Router()

const loginRoutes = require('./login.route')
const userRoutes = require('./user.route')

routes.get('/', (req, res) => {
    res.send("welcome")
})

routes.use('/usuarios', userRoutes)
routes.use('/login', loginRoutes)

module.exports = routes
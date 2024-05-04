const { Router } = require('express')
const routes = new Router()

const loginRoutes = require('./login.route')
const userRoutes = require('./user.route')
const pointOfInterestRoutes = require('./pointofinterest.route')

routes.get('/', (req, res) => {
    res.send("welcome")
})

routes.use('/usuarios', userRoutes)
routes.use('/login', loginRoutes)
routes.use('/local', pointOfInterestRoutes)
module.exports = routes
const { Router } = require('express')
const routes = new Router()

const loginRoutes = require('./login.route')
const userRoutes = require('./user.route')
const pointOfInterestRoutes = require('./pointofinterest.route')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../../swagger-output.json')

routes.get('/', (req, res) => {
    //#swagger.tags = ['Home']
    res.send("welcome")
})

routes.use('/usuarios', userRoutes)
routes.use('/login', loginRoutes)
routes.use('/local', pointOfInterestRoutes)
//swagger
routes.use('/docs', swaggerUi.serve
    // #swagger.tags = ['Documentação']
)
routes.get('/docs', swaggerUi.setup(swaggerDocument)
    // #swagger.tags = ['Documentação']
)

module.exports = routes
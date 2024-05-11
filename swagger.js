const swaggerAutogen = require('swagger-autogen')
const { config } = require('dotenv')
config()
const doc = {
    info: {
        tittle: "Nature 365",
        description: "Description"
    },
    host: `${process.env.HOST}:${process.env.PORT_API}`,
    definitions: {
        PointOfInterestGeolocation: {
            latitude: 0.0,
            longitude: 0.0,
        },
        PointOfInterestAddress: {
            streetName: 'sdfsdfsdf',
            number: 'sdfsdf',
            complement: '',
            area: 'sdfsdf',
            city: '',
            state: '',
            country: '',
            areaCode: '',
        },
        CreatePointOfInterest: {
            name: '',
            description: 'description',
            address: {
                $ref: '#/definitions/PointOfInterestAddress'
            }
        },
        UpdatePointOfInterest: {
            name: "Parque Nacional de Itaipu",
            description: "Reserva Ambiental",
            address: {
                $ref: '#/definitions/PointOfInterestAddress'
            },
            geolocation: {
                $ref: '#/definitions/PointOfInterestGeolocation'
            }
        },
        PointOfInterestArray: [{ $ref: '#/definitions/UpdatePointOfInterest' }],
        UserAddress: {
            streetName: '',
            number: '',
            complement: '',
            area: '',
            city: '',
            state: '',
            country: '',
            areaCode: '',
        },
        AddUser: {
            fullName: '',
            cpf: '',
            birthDate: '',
            gender: '',
            email: '',
            password: '',
            address: {
                $ref: '#/definitions/UserAddress'
            }
        },
        Login: {
            token: 'Your Token.'
        }

    }
};

const outputFile = "./swagger-output.json"
const routes = ['./src/routes/routes.js']

swaggerAutogen(outputFile, routes, doc)
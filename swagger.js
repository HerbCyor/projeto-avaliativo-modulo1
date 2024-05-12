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
            streetName: 'Nome da rua',
            number: 'Numero',
            complement: 'Complemento',
            area: 'Bairro',
            city: 'Cidade',
            state: 'Estado',
            country: 'País',
            areaCode: 'CEP',
        },
        CreatePointOfInterest: {
            name: 'Nome do Local',
            description: 'Descrição do local',
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
            streetName: 'Nome da rua',
            number: 'Numero',
            complement: 'Complemento',
            area: 'Bairro',
            city: 'Cidade',
            state: 'Estado',
            country: 'País',
            areaCode: 'CEP',
        },
        AddUser: {
            fullName: 'Nome Completo',
            cpf: '012345678910',
            birthDate: 'YYYY-MM-DD',
            gender: 'sexo',
            email: 'email@email.com',
            password: 'senha',
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
const { verify } = require('jsonwebtoken')
const PointOfInterest = require('../models/PointOfInterest')
const PointOfInterestAddress = require('../models/PointOfInterestAddress')
const PointOfInterestGeolocation = require('../models/PointOfInterestGeolocation')
const utils = require("../utils/utils")
const { config } = require('dotenv')
config()

class PointOfInterestController {
    async registerPointOfInterest(req, res) {
        try {

            const pointOfInterestAddressData = {
                streetName: req.body.streetName,  // nome da rua
                number: req.body.number, // numero
                area: req.body.area, // bairro
                city: req.body.city, // cidade
                state: req.body.state, // estado
                country: req.body.country, // pais
                areaCode: req.body.areaCode, // CEP
            }

            console.log(pointOfInterestAddressData)
            const { lat, lon } = await utils.getGeolocation(pointOfInterestAddressData) //fetch geolocation from api util :: busca dados da api open street map 
            // usando utils.openstreetmap 

            const decoded = verify(req.headers.authorization, process.env.JWT_SECRET) // get user id
            const userId = decoded.sub

            const googleMapsUrl = await utils.googleMapsUrl(lat, lon) //to do: create googleMapsUrl :: cria url do google maps utilizando utils.googlemaps

            const pointOfInterestData = {  // data for the creation of Point Of Interest :: dados para a criação do local
                name: req.body.name,
                description: req.body.description,
                userId: userId,
                googleMapsUrl: googleMapsUrl

            }

            const newPointOfInterest = await PointOfInterest.create(pointOfInterestData) // create new PointOfInterest in database :: novo local na database

            pointOfInterestAddressData.PointOfInterestId = newPointOfInterest.id // add the id of Point of Interest to the Address :: adiciona o id do local nos dados do endereço

            const newAddress = await PointOfInterestAddress.create(pointOfInterestAddressData) // create new PointOfInterest address in database :: novo endereço de local na database
            const pointOfInterestAddressGeolocationData = { // data for the creation of geolocation :: dados para a criação de novas coordenadas
                latitude: lat,
                longitude: lon,
                PointOfInterestAddressId: newAddress.id
            }

            const newGeolocation = await PointOfInterestGeolocation.create(pointOfInterestAddressGeolocationData) // create new geolocation in database:: novas coordenadas na database

            return res.status(201).json({ message: "Local cadastrado com sucesso", local: newPointOfInterest })
        } catch (error) {
            console.log(error)
            return res.status(500).json("Houve um erro ao cadastrar o local")
        }


    }

    async getAllPointsOfInterest(req, res) {
        try {
            const decoded = verify(req.headers.authorization, process.env.JWT_SECRET) // get user id
            const userId = decoded.sub

            const pointsOfInterest = await PointOfInterest.findAll({ // find all PoIs fron the logged user
                where: {
                    userId: userId
                }
            })

            if (!pointsOfInterest) {
                return res.status(404).json({ message: "Você não possui nenhum local cadastrado" })
            }
            res.status(200).json(pointsOfInterest)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Houve um erro." })
        }

    }

    async getOnePointOfInterest(req, res) {

        try {
            const pointOfInterestId = req.params.local_id // Point Of Interest id

            const pointOfInterest = await PointOfInterest.findByPk(pointOfInterestId)

            if (!pointOfInterest) {
                return res.status(404).json("Local não encontrado")
            }
            const pointOfInterestAddress = await PointOfInterestAddress.findOne({
                where: {
                    PointOfInterestId: pointOfInterestId
                }
            })
            const pointOfInterestGeolocation = await PointOfInterestGeolocation.findOne({
                where: {
                    PointOfInterestAddressId: pointOfInterestAddress.id
                }
            })
            return res.status(200).json({ local: pointOfInterest, endereco: pointOfInterestAddress, geolocalizacao: pointOfInterestGeolocation })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Houve um erro." })
        }

    }
    async deleteOnePointOfInterest(req, res) {

        try {
            const pointOfInterestId = req.params.local_id

            const pointOfInterest = await PointOfInterest.findByPk(pointOfInterestId)
            if (!pointOfInterest) {
                return res.status(404).json("Local não encontrado")
            }

            await PointOfInterestAddress.destroy({ //delete address associated with Point of Interest :: deletar endereço associado ao Local
                where: {
                    PointOfInterestId: pointOfInterest.id
                }
            })

            await PointOfInterest.destroy({ // delete Point of Interest :: deletar o Local
                where: {
                    id: pointOfInterestId
                }
            })
            res.status(200).json({ message: "Local deletado com sucesso." })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Houve um erro." })
        }
    }

    async updateOnePointOfInterest(req, res) {

        try {
            const pointOfInterestId = req.params.local_id
            // console.log(Object.keys(PointOfInterest.getAttributes()))
            const dataToUpdate = req.body

            const pointOfInterest = await PointOfInterest.findByPk(pointOfInterestId)

            if (!pointOfInterest) {
                return res.status(404).json({ message: "Local não encontrado" })
            }

            const pointOfInterestFields = Object.keys(PointOfInterest.getAttributes()) // Array of column names for Points of Interest
            const pointOfInterestAddressFields = Object.keys(PointOfInterestAddress.getAttributes()) // Array of column names for Points of Interest Address

            let pointOfInterestDataToUpdate = {} // initialize data to be updated in Point of Interest
            let pointOfInterestAddressDataToUpdate = {} // initialize data to be updated Point of Interest Address

            for ([key, value] of Object.entries(dataToUpdate)) { // adds the value to be updated to the dictionaries
                if (pointOfInterestFields.includes(key)) {      // if the key passed in req.body is valid for Point of Interest

                    pointOfInterestDataToUpdate[key] = value
                }
                if (pointOfInterestAddressFields.includes(key)) { // if the key passed in req.body is valid for Point of Interest Address

                    pointOfInterestAddressDataToUpdate[key] = value
                }
            }

            await PointOfInterest.update(pointOfInterestDataToUpdate, { where: { id: pointOfInterestId } }) //update database
            await PointOfInterestAddress.update(pointOfInterestAddressDataToUpdate, { where: { PointOfInterestId: pointOfInterestId } }) //update database

            res.status(200).json({ message: "Dados Atualizados com Sucesso" })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Houve um erro." })
        }
    }


    async getPointOfInterestGoogleMapsUrl(req, res) {
        try {
            const pointOfInterestId = req.params.local_id

            const pointOfInterest = await PointOfInterest.findByPk(pointOfInterestId)

            if (!pointOfInterest) {
                return res.status(404).json({ message: "Local não encontrado" })
            }
            res.status(200).json({ local_id: pointOfInterestId, googleMapsUrl: pointOfInterest.googleMapsUrl })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Houve um erro." })
        }
    }
}

module.exports = new PointOfInterestController()
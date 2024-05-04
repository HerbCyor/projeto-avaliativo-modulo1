const openstreetmap = require("./openstreetmap")
const googlemaps = require("./googlemaps")

module.exports = {
    getGeolocation: openstreetmap,
    googleMapsUrl: googlemaps
}
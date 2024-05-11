const axios = require('axios')

module.exports = async function (address) {

    const streetName = address.streetName.split(" ").join("+") + "+" + address.number.toString()
    const query_url = `https://nominatim.openstreetmap.org/search.php?street=${streetName}&city=${address.city}&county=${address.area}&state=${address.state}&country=${address.country}&format=jsonv2`
    console.log(query_url)
    const response = await axios.get(query_url)

    const lat = response.data[0] ? response.data[0].lat : 0.0 //latitude
    const lon = response.data[0] ? response.data[0].lon : 0.0 // longitude

    return {
        lat: lat,
        lon: lon,

    }
}



module.exports = async function (address) {

    // extract values from address
    const addressValues = Object.values(address)
    const addressWordsArray = []
    // strips every word of the address into an array

    addressWordsArray.push(...address.streetName.split(" "))
    addressWordsArray.push(address.number.toString())

    // addressValues.forEach((element) => {
    //     typeof (element) != "string" ? element = element.toString() : element // converts elements that are not strings into strings
    //     addressWordsArray.push(...element.split(" "))
    // })

    // concatenates every word in the array with a '+' between them
    const query_string = addressWordsArray.join("+") + "&format=jsonv2"
    // base openstreetmap search url
    const base_url = "https://nominatim.openstreetmap.org/search.php?q="
    // extract values from address object and constructs the query
    const query_url = base_url + query_string
    console.log(query_url)

    return await fetch(query_url).then((response) => {
        return response.json()
    }).then((data) => {
        return {
            lat: data[0].lat, //latitude
            lon: data[0].lon, // longitude

        }
    })



}



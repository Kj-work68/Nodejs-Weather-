const axios = require("axios")
const setthings = require("../setting")
const city  = (cityName = "Bangkok", countryCode = "th") =>{
    return axios
    .get(`${setthings.apiUrl}?q=${cityName},${countryCode}&appid=${setthings.apiKey}&units=metric`)
}
module.exports = city
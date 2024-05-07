const axios = require("axios")
const apiUrl = "https://api.openweathermap.org/data/2.5/weather"
const apiKey = "8eb60c30372aa05d05c9123147db28bc"
// const cityName = "Phuket"
// const countryCode = "th"
// const lon = 98.9048538
// const lat = 18.7967139
const zipCode = 43000
const countryCode = "th"

axios 
    .get(`${apiUrl}?zip=${zipCode},${countryCode}&appid=${apiKey}&units=metric`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
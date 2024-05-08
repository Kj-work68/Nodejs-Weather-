const axios = require('axios')
const settings = require('../setting')
const location = (lon = 102.3829839 ,lat = 15.6338096 ) =>{
return axios 
    .get(`${settings.apiUrl}?lon=${lon}&lat=${lat}&appid=${settings.apiKey}&units=metric`)
}
module.exports = location;
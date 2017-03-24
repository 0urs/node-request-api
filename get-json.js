//const session = require('electron')
var request = require("request")

//id de la ville
const id    = "6427109"

//Ma clé pour l'api
const key   = ""

var url     = "http://api.openweathermap.org/data/2.5/weather?id="+id+"&APPID="+key

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body)
        console.log(temperature)
        document.getElementById("temperature").innerHTML    = Math.round(body.main.temp - 273,15)
        document.getElementById("humidite").innerHTML       = body.main.humidity
    }
    else {
        console.log(error)
        console.log(response.statusCode)
    }
})

/**
  Nombre: Javier Fernández Morata
  Login: jmorata
**/
'use strict'
function prediccion(longitud, latitud){
  let uri = 'http://api.weatherunlocked.com'
  let recurso = 'api/current/'
  let appID = '7b87a801'
  let appKey = 'f10996bba2e9477cbefcf46bcb8a8092'
  uri = uri + "/" + recurso + String(longitud) + "," + String(latitud) + "?"
  uri += "app_id=" + appID + "&app_key=" + appKey + "&lang=es"
  let request = require('request')
  request.get(uri, function(error,response,body){
    let message = displayInfo(body)
    console.log(message)
  })
}

function displayInfo(x){
  let informacion = JSON.parse(x)
  let message = "El tiempo en la ubicación con LAT " + informacion.lat + " y L " + informacion.lon + " es: \n"
  message += "Estado -> " + informacion.wx_desc + "\n"
  message += "Temperatura -> " + informacion.temp_c + " ºC \n"
  message += "Sensacion Termica -> " + informacion.feelslike_c + " ºC \n"
  message += "Velocidad Media Máxima Viento -> " + informacion.windspd_kmh + " km/h\n"
  return message
}

function testPrediccion(){
  prediccion(40.2812638,-3.8130728)
  prediccion(40.6971494,-74.2598723)
  prediccion(18.6665711,-71.2515165)
  prediccion(-33.8679049,151.1924823)
}
//Main
testPrediccion()

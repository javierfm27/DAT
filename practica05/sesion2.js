/**
Login: jmorata
Nombre: Javier Fernández Morata
 **/
'use strict'
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
}

function initHtml(){
  let usuario = localStorage.getItem('user')

  if (!usuario) {
    let p = prompt("Ingrese aqui su nombre", "p.e. Javier")
    localStorage.setItem('user',p)
  }
}

function obtainParamGeo(){
    navigator.geolocation.getCurrentPosition(success, error, options)
}

function success(position){
  let x = position.coords

  //Generamos un objeto, y tras eso lo pasamos a Json y lo guardamos
  let datos = [{'latitud':x.latitude},{'longitud':x.longitude},{'precision':x.accuracy}]
  let cadenaJson = JSON.stringify(datos)
  console.log(typeof(cadenaJson),cadenaJson)
  localStorage.setItem('info',cadenaJson)
}

function error(err){
    console.warn('ERROR' + err.code + ": " + err.message)
}

function remove(){
  localStorage.clear()
}

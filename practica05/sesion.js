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

  localStorage.setItem("visited","true")
  //Guardamos los datos en el diccionario
  localStorage.setItem("latitud",x.latitude)
  localStorage.setItem("longitud",x.longitude)
  localStorage.setItem("precision",x.accuracy)
  localStorage.setItem('fecha', new Date())
}

function error(err){
    console.warn('ERROR' + err.code + ": " + err.message)
}

function remove(){
  localStorage.clear()
}

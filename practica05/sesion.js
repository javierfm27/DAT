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
  let fecha = new Date()

  let message = "Hola " + usuario + ". Tu última visita fue con fecha " + fecha
  if (!usuario) {
    let p = prompt("Ingrese aqui su nombre", "p.e. Javier")
    localStorage.setItem('user',p)
    let message = "Hola " + p + ". Esta es tu primera visita."
    return message
  }
  return message
}

function error(err){
    console.warn('ERROR(${err.code}): ${err.message}')
}

function geoMessage(coord){
  let x = coord.coords
  return x
}

function remove(){
  localStorage.clear()
}

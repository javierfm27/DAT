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
    localStorage.setItem('visited','true')
  }
}

function obtainGeoMessage(){
  navigator.geolocation.getCurrentPosition(coord,error,options)
}

function coord(pos){
  let x = pos
   
}

function error(err){
    console.warn('ERROR(${err.code}): ${err.message}')
}

function remove(){
  localStorage.clear()
}

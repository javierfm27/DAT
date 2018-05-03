/**
Login: jmorata
Nombre: Javier Fernández Morata
 **/
'use strict'
let options = {
  enableHighAccuracy: true,
  maximumAge: 0,
}

function initUser(){
  let ubicacion = JSON.parse(localStorage.getItem('ubi'))
  let p = prompt("Ingrese aqui su nombre", "p.e. Javier")
  ubicacion.usuario = p
  let ubiCadena = JSON.stringify(ubicacion)
  localStorage.setItem('ubi',ubiCadena)
}

function success(position){
  let x = position.coords

  //Obtenemos la cadena JSON
  let ubiObject = JSON.parse(localStorage.getItem('ubi'))

  //Asignamos los valores
  ubiObject.latitud = x.latitude.toFixed(2)
  ubiObject.longitud = x.longitude.toFixed(2)
  ubiObject.precision = x.accuracy.toFixed(2)
  ubiObject.fecha = String(new Date())

  //Guardamos la Cadena nueva
  let ubiCadena = JSON.stringify(ubiObject)
  localStorage.setItem('ubi',ubiCadena)
}

function error(err){
    console.warn('ERROR' + err.code + ": " + err.message)
}

function remove(){
  localStorage.clear()
}

function initObject(){
  if(!(localStorage.getItem('ubi'))){
    //Creamos un objeto llamado ubicacion, donde estaran todos los datos
    let ubicacion = {
      latitud : 0,
      longitud: 0,
      precision: 0,
      fecha: 0,
      usuario: 0,
    }
    localStorage.setItem('ubi',JSON.stringify(ubicacion))
    navigator.geolocation.getCurrentPosition(success, error, options)
    let p = prompt("Ingrese aqui su nombre", "p.e. Javier")
    ubicacion = JSON.parse(localStorage.getItem('ubi'))
    ubicacion.usuario= p
    localStorage.setItem('ubi',JSON.stringify(ubicacion))
    return true
  }
  return false
}

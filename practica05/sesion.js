/**
Login: jmorata
Nombre: Javier Fernández Morata
 **/
'use strict'
let options = {
  enableHighAccuracy: true,
  maximumAge: 0,
}


function success(position){
  let x = position.coords

  //Guardamos los datos en el diccionario
  console.log("Lo guardo")
  localStorage.setItem("latitud",x.latitude.toFixed(2))
  localStorage.setItem("longitud",x.longitude.toFixed(2))
  localStorage.setItem("precision",x.accuracy.toFixed(2))
  localStorage.setItem('fecha', new Date())

}

function error(err){
    console.warn('ERROR' + err.code + ": " + err.message)
}

function remove(){
  localStorage.clear()
}

function initObject(){
  if(!(localStorage.getItem('user'))){

    navigator.geolocation.getCurrentPosition(success, error, options)
    let p = prompt("Ingrese aqui su nombre", "p.e. Javier")
    localStorage.setItem('user',p)
    return true
  }
  return false
}

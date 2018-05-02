/**
Login: jmorata
Nombre: Javier Fernández Morata
 **/
'use strict'
let options = {
  enableHighAccuracy: true,
  maximumAge: 0,
}

function initHtml(){
  let usuario = localStorage.getItem('user')

  if (!usuario) {
    let p = prompt("Ingrese aqui su nombre", "p.e. Javier")
    localStorage.setItem('user',p)
  }
}

function success(position){
  let x = position.coords

  //Guardamos los datos en el diccionario
  console.log("Lo guardo")
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

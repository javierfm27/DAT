/**
Login: jmorata
Nombre: Javier Fernández Morata
 **/
'use strict'
function initHtml(){
  let usuario = localStorage.getItem('user')

  if (!usuario) {
    let p = prompt("Ingrese aqui su nombre", "p.e. Javier")
    localStorage.setItem('user',p)
  }
}

/**
  Nombre: Javier Fernández Morata
  Login: jmorata
**/
'use strict'
//Vamos a crear un dato JSON Libro con las siguientes propiedades
let libro = [325,'Origen',['Cap1','Cap2','Cap3'],{'secuela':false,'editorial':'edelvives'},true,null,{'sinopsis':null},'json']

//Convertimos Objeto a Cadena
let cadenaJson = JSON.stringify(libro)
console.log(libro)

//Pasamos Cadena a Objeto JavaScript
let objectJs = JSON.parse(cadenaJson)
console.log(typeof(objectJs))

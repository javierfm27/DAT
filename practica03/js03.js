#!/usr/bin/nodejs
/*
Javier Fernández Morata
login: jmorata
*/
'use strict'

function passwordCheck(password,length,minLC,minUC,minNumber,minSpecial,specialChars){
  //Al no soportar el introducir valores por omisión, hacemos lo siguiente
  minLC = minLC || 0;
  minUC = minUC || 0;
  minNumber = minNumber || 0;
  minSpecial = minSpecial || 0;
  //Vamos a verificar la contraseña comprobando uno a uno los criterios que debe cumplir para considerar la fortaleza
  //Length
  let value;
  value =(password.length >= length? true : false);
  //Lower case
  let contador = 0;
  for (let i of password){
    if(!Number(i)){
      (i.toLowerCase() == i)? contador++ : NaN;
    }
  }
  value = (contador >= minLC) ? true:false;
  console.log("Hemos contado: " + contador + " minuscula/s");
  //Upper case
  contador = 0;
  for (let i of password){
    if(!Number(i)){
      (i.toUpperCase() == i)? contador++ : NaN;
    }
  }
  value = (contador >= minLC) ? true:false;
  console.log("Hemos contado: " + contador + " mayuscula/s");
  //Number
  contador = 0;
  for (let i of password){
    Number(i)? contador++ : NaN;
  }
  console.log("Hemos contado: " + contador + " numero/s");
  value = (contador >= minNumber) ? true:false;
  //Special Chars
  contador = 0;
  let x = String(caracteres);
  for(let i of x){
    for(let j of contraseña){
      (j==i)?contador++:NaN;
    }
  }
  console.log("Hemos contado: " + contador + " caractere/s especial/es");
  value = (contador >= minSpecial) ? true:false;
  //Value Return
  return value;
}

let contraseña = "&12ja34()viRMD";
let longitud = 4;
let minimoMinus = 2;
let minimoMayus = 2;
let minNumeros = 2;
let minEspecial = 2;
let caracteres = ["&%/()"];
console.log(passwordCheck(contraseña,longitud,minimoMinus,minimoMayus,minNumeros,minEspecial,caracteres));

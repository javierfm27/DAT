#!/usr/bin/nodejs
/*
Javier Fernández Morata
login: jmorata
*/
'use strict'

function metresToKm (x){
  let y;

  y = x * (3600/1000);
  return y;
};

function metresToMilles (x){
  let y;

  y = x * (3600/1609.344);
  return y;
};
//

let y, z, x;
x = 40;
y = metresToKm(x);
z = metresToMilles(x).toFixed(2);
console.log(x + 'm/s son ' + y + ' km/h');
console.log(x + 'm/s son ' + z + ' millas/s');

/*
#!/usr/bin/nodejs
Javier Fernández Morata
login: jmorata
*/
'use strict'
function conversion(src,dest){
  if(!(typeof dest == 'string')){
    throw new TypeError("Error: The parameter dest must be string");
  }
  if (typeof src == 'string'){
    src = Number(src);
  }
  switch (dest) {
    case 'm/s':
      return src;
      break;
    case 'km/h':
      return (src * (3600/1000));
      break;
    case 'mph':
	  let result = src * (3600/1609.344)
      return(result.toFixed(2));
      break;
    default:
      throw new SyntaxError("Error: dest must be 'm/s','km/h' o 'mph'");
  }
}


let dest, metros, unidad;
metros = '33';
unidad = 'm/s';
try{
  dest = conversion(metros,unidad);
  if (dest != -1){
    console.log(metros + 'm/s son ' + dest + ' ' + unidad);
  }
}catch (e){
  console.log('Capturada Excepcion->' + e.name + " " + e.message)
}

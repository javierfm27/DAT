/*
#!/usr/bin/nodejs
Javier Fernández Morata
login: jmorata
*/
'use strict'
//States
//State First Operating
function firstOperating(key,calculator){
  calculator.firstOperating = String(calculator.firstOperating) + key
  calculator.firstOperating = Number(calculator.firstOperating)
}
//Waiting Second Operating
function waitingSecondOperating(calculator,key){
  calculator.operator = key
  calculator.haveOperator = true
}

//State Second Operating
function secondOperating(key,calculator){
  calculator.secondOperating = String(calculator.secondOperating) + key
  calculator.secondOperating = Number(calculator.secondOperating)
}

//State Show result
function showResult(calculator){
  let operator = String(calculator.operator)
  switch (operator) {
    case "+":
      calculator.solution = calculator.firstOperating + calculator.secondOperating
      break;
    case "*":
      calculator.solution = calculator.firstOperating * calculator.secondOperating
      break;
    case "-":
      calculator.solution = calculator.firstOperating - calculator.secondOperating
      break;
    case "/":
      calculator.solution = calculator.firstOperating / calculator.secondOperating
      break;
  }
}

//State
function resetCalculator(calculator){
  calculator.firstOperating = 0
  calculator.secondOperating = 0
  calculator.operator = NaN
  calculator.haveOperator = false
  calculator.solution = 0
}

//CheckOperator
function checkOperator(key){
  let operators = ["+","-","*","/"]

  for(let i of operators){
    if(i==key){
      return true
    }
  }
  return false
}


function getKey(key, calc){
  //Al iniciar la calculadora estaria mostrando 0, esperando el primer argumento. Pero de momento no vamos a programar esta
  //funcionalidad, ya que todo se da seguido

  //Check the able Key
  if(!Number(key)){
    if(checkOperator(key)){
      if(calc.haveOperator == true){
        showResult(calc)
        return(calc.solution)
        calc.firstOperating = 0
        firstOperating(String(calc.solution),calc)
        calc.secondOperating = 0
        waitingSecondOperating(calc,key)
      }else{
        waitingSecondOperating(calc,key)
      }
      return ''
    }else{
      if(key == "="){
        showResult(calc)
        return(calc.solution)
      }else if (key == "c"){
        resetCalculator(calc)
        return(0)
      }
    }
  }else{
    if(calc.haveOperator){
      secondOperating(key,calc)
      return(calc.secondOperating)
    }else{
      firstOperating(key,calc)
      return(calc.firstOperating)
    }
  }
}



function testCalc(){
  let calculator = {
    firstOperating : 0,
    secondOperating : 0,
    operator : NaN,
    solution : 0,
    haveOperator: false,
  }
  console.log(getKey(3,calculator))
  console.log(getKey(2,calculator))
  console.log(getKey('+',calculator))
  console.log(getKey(4,calculator))
  console.log(getKey('c',calculator))
  console.log(getKey('=',calculator))
  console.log(getKey(2,calculator))
  console.log(getKey('+',calculator))
  console.log(getKey(4,calculator))
  console.log(getKey('+',calculator))
}

//Main de JavaScript
testCalc()

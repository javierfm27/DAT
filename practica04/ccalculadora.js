#!/usr/bin/nodejs
/*
Javier Fernández Morata
login: jmorata
*/
'use strict'
//Definimos la clase Calculadora
class Calculadora{
  
}
//States
//State First Operating
function firstOperating(key,calculator){
  calculator.firstOperating = String(calculator.firstOperating) + key
  calculator.firstOperating = Number(calculator.firstOperating)
  console.log(calculator.firstOperating)
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
  console.log(calculator.secondOperating)
}

//State Show result
function showResult(calculator){
  let operator = String(calculator.operator)
  switch (operator) {
    case "+":
      calculator.solution = calculator.firstOperating + calculator.secondOperating
      console.log(calculator.solution)
      break;
    case "*":
      calculator.solution = calculator.firstOperating * calculator.secondOperating
      console.log(calculator.solution)
      break;
    case "-":
      calculator.solution = calculator.firstOperating - calculator.secondOperating
      console.log(calculator.solution)
      break;
    case "/":
      calculator.solution = calculator.firstOperating / calculator.secondOperating
      console.log(calculator.solution)
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
  console.log(0)
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
        calc.firstOperating = 0
        firstOperating(String(calc.solution),calc)
        calc.secondOperating = 0
        waitingSecondOperating(calc,key)
      }else{
        waitingSecondOperating(calc,key)
      }
    }else{
      if(key == "="){
        showResult(calc)
      }else if (key == "c"){
        resetCalculator(calc)
      }
    }
  }else{
    if(calc.haveOperator){
      secondOperating(key,calc)
    }else{
      firstOperating(key,calc)
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
  getKey(3,calculator)
  getKey("+",calculator)
  getKey(5,calculator)
  getKey("*",calculator)
  getKey(2,calculator)
  getKey("=",calculator)
  getKey("c",calculator)
  getKey(1,calculator)
  getKey(1,calculator)
  getKey("*",calculator)
  getKey(2,calculator)
  getKey("=",calculator)
}

//Main de JavaScript
testCalc()

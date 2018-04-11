#!/usr/bin/nodejs
/*
Javier Fernández Morata
login: jmorata
*/
'use strict'
//Definimos la clase Calculadora
class Calculadora{
  constructor(firstOperating, secondOperating, operator, solution, haveOperator){
    this.firstOperating = 0;
    this.secondOperating = 0;
    this.operator = NaN;
    this.solution = 0;
    this.haveOperator = false;
  }

  //States
  //State First Operating
  primerOperando(key){
    this.firstOperating = String(this.firstOperating) + key
    this.firstOperating = Number(this.firstOperating)
  }
  //Waiting Second Operating
  waitingSecondOperating(key){
    this.operator = key
    this.haveOperator = true
  }

  //State Second Operating
  segundoOperando(key){
    this.secondOperating = String(this.secondOperating) + key
    this.secondOperating = Number(this.secondOperating)
  }

  //State Show result
  showResult(){
    let operator = String(this.operator)
    switch (operator) {
      case "+":
        this.solution = this.firstOperating + this.secondOperating
        break;
      case "*":
        this.solution = this.firstOperating * this.secondOperating
        break;
      case "-":
        this.solution = this.firstOperating - this.secondOperating
        break;
      case "/":
        this.solution = this.firstOperating / this.secondOperating
        break;
    }
  }

  //State
  resetCalculator(){
    this.firstOperating = 0
    this.secondOperating = 0
    this.operator = NaN
    this.haveOperator = false
    this.solution = 0
    return 0
  }

  //CheckOperator
  checkOperator(key){
    let operators = ["+","-","*","/"]

    for(let i of operators){
      if(i==key){
        return true
      }
    }
    return false
  }


  getKey(key){
    //Al iniciar la calculadora estaria mostrando 0, esperando el primer argumento. Pero de momento no vamos a programar esta
    //funcionalidad, ya que todo se da seguido

    //Check the able Key
    if(!Number(key)){
      if(this.checkOperator(key)){
        if(this.haveOperator == true){
          this.showResult(calc)
          return(this.solution)
          this.firstOperating = 0
          this.primerOperando(String(this.solution))
          this.secondOperating = 0
          this.waitingSecondOperating(key)
        }else{
          this.waitingSecondOperating(key)
        }
      }else{
        if(key == "="){
          this.showResult()
          return(this.solution)
        }else if (key == "c"){
          this.resetCalculator()
          return(solution)
        }
      }
    }else{
      if(this.haveOperator){
        this.segundoOperando(key)
        return(this.secondOperating)
      }else{
        this.primerOperando(key)
        return(this.firstOperating)
      }
    }
  }


}

//Main de JavaScript
//  Aqui probaremos los objetos
let calc = new Calculadora();
console.log(calc.getKey(3))
console.log(calc.getKey(5))
console.log(calc.getKey('+'))
console.log(calc.getKey(4))
console.log(calc.getKey('='))

"use strict";
const prompt = require("prompt-sync")();
const alert = require('alert')
let  getBalance  = require("./atm")
let  withdraw  = require("./atm")
let deposit  = require("./atm")
let  validatePin  = require("./atm")
//TODO: Add debugger (see demo video)
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//TODO: Import necessary functions from atm.js
//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions




function accessATM(currentAtmPin) {
  //TODO: Prompt users for their pin
  let userInput = prompt("Please Enter Pin")
  if(validatePin.validatePin(userInput)==true){
    mainMenu();
  }
  else if (userInput!=currentAtmPin){
    userInput=prompt("Please Enter Correct Pin")
    if (validatePin.validatePin(userInput)==true){
      mainMenu()
    }else{
      alert("Access Denied")
    }
  }
  
  //Useches
  //Proceed to main menu ONLY if they match
}
accessATM(validatePin)
//TODO: Call accessATM function
function mainMenu() {
let chooseToContinue =true
let numberPrompt
let userInput 
  while (chooseToContinue==true) {
    
    numberPrompt=prompt("Main Menu, please chose an option \n press 1 for Balance \n Press 2 for Withdrawl \n Press 3 for Deposit \n Press 4 To Return Card and Exit")
if(numberPrompt==1){
    
    console.log(getBalance.getBalance())
}

else if(numberPrompt==2){
  userInput=prompt("How much would you like to withdraw?")
  withdraw.withdraw(userInput)
}
  else if(numberPrompt==3) {
    userInput=prompt("How much would you like to deposit")
    deposit.deposit(userInput)
  }
  else if(numberPrompt==4){
    alert("Return Card and Exit!")
    chooseToContinue=false
  }

  else{
    alert("We do not recognize your choice")
  }
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
    //Quit
  }
//TODO: Call mainMenu function to start our app!
}
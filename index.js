"use strict";
const prompt = require("prompt-sync")();
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
  if(userInput===currentAtmPin){
    mainMenu();
  }
  else if (userInput!=currentAtmPin){
    userInput=prompt("Please Enter Correct Pin")
    if (userInput!=currentAtmPin){
      userInput=prompt("Acces Denied")
    }
  }
  
  //Useches
  //Proceed to main menu ONLY if they match
}
accessATM(validatePin)
//TODO: Call accessATM function

function mainMenu() {

  
  
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
    //Quit


//TODO: Call mainMenu function to start our app!
}
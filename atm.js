"use strict";
const prompt = require("prompt-sync")();
let {currentAtmPin, currentBalance} = require("./account")
//TODO: Import necessary values from account.js

function getBalance() {
  return currentBalance
  //TODO: Return the customer's acct. balance
}

function withdraw(withdrawAmount) {

  currentBalance-=parseInt(withdrawAmount)
  console.log(`The new balance is ${currentBalance}`);
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made
}

function deposit(depositAmount) {
  currentBalance+=parseInt(depositAmount)
  console.log(`The new balance is ${currentBalance}`)
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
}

function validatePin(enteredPin) {
  if(parseInt(enteredPin)===currentAtmPin){
    return true
  }
  else{
    return false
  }
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.
}

//TODO: Export these functions

module.exports = {
  getBalance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  validatePin: validatePin,
};


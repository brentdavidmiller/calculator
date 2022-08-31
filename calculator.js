//app variables
let userInput = "0";
let userOperatorSelect;
let isOperatorSet = false;
let operandOne = "";
let operandTwo = "";
let operator = "";
//if operator hasnt been pressed, allow for number inputs
//if operator has been pressed que first number and operator,
//wait for second value to be entered, if equals is then pressed blah blah,
//if another operator is pressed, append first value with previous result
//wait for user input of second value

//functions
const output = document.querySelector("#userInput");

for (let button of document.querySelectorAll("button")) {
  button.addEventListener("click", handleClick);
}

function handleClick(e) {
  const button = e.target
    if (button.id === "equals") {
      equalPress();
    } else if (button.id === "clear") {
      clearPress();
      return;
    }else if (button.id === "backspace") {
      backspacePress();
    }else if (button.id === "decimal") {
      return decimalPress();
    }else if (button.className === "op") {
      return operatorPress(button.textContent);
    }else if (button.className === "num") {
      numberPress(button.textContent);
    }
    displayOutput();
}

function displayOutput () {
  let value
  if(isOperatorSet) {
    value = operandTwo;
  }else {
    value = operandOne;
  }
  output.value = value;
}

function numberPress(num) {
  //add number to display, store multiple number press values up until operator is implemented
  //once operator press is executed allow for input of second value (number press needs to know )
  if (isOperatorSet) {
    operandTwo += num;
  } else {
    operandOne += num;
  }
}

function operatorPress(op) {
  //apply operator to stored user value and wait for follow up value
  //must know if you're working on first or second operand
  if (isOperatorSet) {
    // isOperatorSet = false;
    calculate();
    displayOutput();
    //keep the display of the current value when an operator is pressed. currently value disappears
  }
  isOperatorSet = true;
  operator = op;
  //allow for changing of operator if user clicked unintended operator
}

function calculate() {
  let opOne = Number(operandOne);
  let opTwo = Number(operandTwo);
  let result;
  switch (operator) {
    case "+":
      result = opOne + opTwo;
      break;
    case "-":
      result = opOne - opTwo;
      break;
    case "*":
      result = opOne * opTwo;
      break;
    case "/":
      result = opOne / opTwo;
      break;
  }
  operandOne = result.toString();
  operandTwo = "";
  isOperatorSet = false;
  //when adding a second operator its appending the new number to the current operand rather than starting a new number for a new operand
  //operandOne + operator + operandTwo
}

function clearPress() {
  //clear all variables and reset app state
  output.value = "0";
  userInput = 0;
  userOperatorSelect;
  isOperatorSet = false;
  operandOne = "";
  operandTwo = "";
  operator = "";
}

function backspacePress() {
  //removes one digit from user input
  if (isOperatorSet) {
    operandTwo = operandTwo.slice(0, -1);
    output.value = operandTwo;
  } else {
    operandOne = operandOne.slice(0, -1);
    output.value = operandOne;
  }
  //backspace too far it stops at zero.
}

function equalPress() {
  //store value for first operator application if state is "clear"
  //store value for second,third, fourth, etc. if "clear" state hasn't been  executed
  calculate();
}

function decimalPress() {
  
  if (isOperatorSet) {
    if (operandTwo.includes (".")) {
      return;
    }
    if (!operandTwo.length) {
      operandTwo = "0";
    }
    operandTwo = operandTwo += ".";
  } else {
    if (operandOne.includes (".")) {
      return
    }
    if (!operandOne.length) {
      operandOne = "0";
    }
    operandOne = operandOne += ".";
  }
  //dont display decimal until next number is pressed
}

//settings



//TUTOR Q's
//"(\d{5}([\-]\d{4})?)"  explain the logic of this pattern recognition for zip codes and basic syntax
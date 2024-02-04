/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(num) {
    this.result += num;
  }
  subtract(num) {
    this.result -= num;
  }
  multiply(num) {
    this.result *= num;
  }
  divide(num) {
    if (num === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    this.result /= num;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(expression) {
    const sanitizedExpression = expression.replace(/\s+/g, ""); // Remove all whitespace
    const operators = ["+", "-", "*", "/"];
    let currentNumber = "";
    let currentOperator = "+"; // Default operator

    for (let i = 0; i < sanitizedExpression.length; i++) {
      const char = sanitizedExpression[i];
      if (operators.includes(char)) {
        this.performOperation(currentNumber, currentOperator);
        currentNumber = "";
        currentOperator = char;
      } else if (!isNaN(parseInt(char))) {
        currentNumber += char;
      } else {
        throw new Error("Invalid character in expression: " + char);
      }
    }

    // Perform the last operation
    this.performOperation(currentNumber, currentOperator);
  }
  performOperation(number, operator) {
    if (number === "") {
      throw new Error("Invalid expression.");
    }
    const num = parseFloat(number);
    switch (operator) {
      case "+":
        this.add(num);
        break;
      case "-":
        this.subtract(num);
        break;
      case "*":
        this.multiply(num);
        break;
      case "/":
        this.divide(num);
        break;
      default:
        throw new Error("Invalid operator: " + operator);
    }
  }
}

module.exports = Calculator;

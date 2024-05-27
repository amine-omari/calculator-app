class Calculator {
  constructor(previousOperandButonTextElement, currentOperandButonTextElement) {
    this.previousOperandButonTextElement = previousOperandButonTextElement;
    this.currentOperandButonTextElement = currentOperandButonTextElement;
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandButonTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandButonTextElement = document.querySelector(
  "[data-current-operand]"
);

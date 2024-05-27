class Calculator {
  constructor(previousOperandButonTextElement, currentOperandButonTextElement) {
    this.previousOperandButonTextElement = previousOperandButonTextElement;
    this.currentOperandButonTextElement = currentOperandButonTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  updateDispaly() {
    this.currentOperandButonTextElement.innerText = this.currentOperand;
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

const calculator = new Calculator(
  previousOperandButonTextElement,
  currentOperandButonTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDispaly();
  });
});

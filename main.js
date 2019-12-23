const buttons = document.querySelectorAll(".number, .operator, .percentage, .divide,");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals-operator");
let displayData = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonValue = button.getAttribute("data-num");
    displayData += buttonValue;
    display.textContent = displayData;
  });
});

equalsButton.addEventListener("click", () => {
  display.textContent = eval(display.textContent);
});

clearButton.addEventListener("click", () => {
  display.textContent = "";
});

// arrays.forEach(button => {
//   button.addEventListener("click", () => {
//     alert("button was clicked!");
//   });
// });

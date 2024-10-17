let display = document.getElementById("inp");
let string = "";

function isOperator(char) {
  const operators = ["+", "-", "x", "/"];
  return operators.includes(char);
}

function myfun(input) {
    let currentValue = display.value || ""; 
    let string = currentValue;

    if (isOperator(input) && currentValue === "") {
        // Only allow '-' as the first operator for negative numbers
        if (input === '-') {
            string = input;  
        }
    } 
    // If the input is an operator and the last character is also an operator
    else if (isOperator(input) && isOperator(currentValue[currentValue.length - 1])) {
        // Replace the last operator with the new one
        string = currentValue.slice(0, -1) + input;
    } else {
        // Otherwise, append the input to the display
        string += input;
    }
    display.value = string;
}


function mydelete() {
  string = string.substring(0, string.length - 1);
  display.value = string;
}

function myclear() {
  display.value = "";
}

function calculate() {
  string = eval(string.replace('x', '*'));
  display.value = string;
}

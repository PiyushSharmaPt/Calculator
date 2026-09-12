const display = document.getElementById("display");
const buttons = document.querySelectorAll("#buttons button");

let result = null;
let operator = null;
let currentNumber = "";

function calculate(value) {

    if (value === "AC") {
        display.textContent = "";
        result = null;
        operator = null;
        currentNumber = "";
    }

    else if (value === "DEL") {
        currentNumber = currentNumber.slice(0, -1);
        display.textContent = display.textContent.slice(0, -1);
    }

    else if ((value >= "0" && value <= "9") || value === ".") {
        currentNumber += value;
        display.textContent += value;
    }

    else if (
        value === "+" ||
        value === "-" ||
        value === "x" ||
        value === "/"
    ) {

        if (result === null) {
            result = Number(currentNumber);
        }

        else if (currentNumber !== "") {

            let secondNumber = Number(currentNumber);

            if (operator === "+") {
                result += secondNumber;
            }
            else if (operator === "-") {
                result -= secondNumber;
            }
            else if (operator === "x") {
                result *= secondNumber;
            }
            else if (operator === "/") {
                result /= secondNumber;
            }
        }

        operator = value;
        currentNumber = "";

        display.textContent += " " + value + " ";
    }

    // Percentage
    else if (value === "%") {

        let num = Number(currentNumber);

        result = num / 100;

        display.textContent += " % = " + result;

        currentNumber = result.toString();
    }

    // Square Root
    else if (value === "√x") {

        let num = Number(currentNumber);

        result = Math.sqrt(num);

        display.textContent += " √ = " + result;

        currentNumber = result.toString();
    }

    else if (value === "log") {

        let num = Number(currentNumber);

        result = Math.log10(num);

        display.textContent += " log = " + result;

        currentNumber = result.toString();
    }

    else if (value === "Sin") {

        let num = Number(currentNumber);

        let radians = num * Math.PI / 180;

        result = Math.sin(radians);

        display.textContent += " Sin = " + result;

        currentNumber = result.toString();
    }

    else if (value === "Cos") {

        let num = Number(currentNumber);

        let radians = num * Math.PI / 180;

        result = Math.cos(radians);

        display.textContent += " Cos = " + result;

        currentNumber = result.toString();
    }

    else if (value === "xʸ") {

        result = Number(currentNumber);

        operator = "^";

        currentNumber = "";

        display.textContent += " ^ ";
    }

    else if (value === "=") {

        if (result !== null && currentNumber !== "") {

            let secondNumber = Number(currentNumber);

            if (operator === "+") {
                result += secondNumber;
            }
            else if (operator === "-") {
                result -= secondNumber;
            }
            else if (operator === "x") {
                result *= secondNumber;
            }
            else if (operator === "/") {
                result /= secondNumber;
            }
            else if (operator === "^") {
                result = Math.pow(result, secondNumber);
            }

            display.textContent = result;
            currentNumber = result;

            

            result = null;
            operator = null;
        }
    }
}


// Mouse buttons
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        calculate(button.textContent);

    });

});


// Keyboard
document.addEventListener("keydown", function(event) {

    let key = event.key;

    if (key >= "0" && key <= "9") {
        calculate(key);
    }

    else if (key === ".") {
        calculate(".");
    }

    else if (key === "+") {
        calculate("+");
    }

    else if (key === "-") {
        calculate("-");
    }

    else if (key === "*") {
        calculate("x");
    }

    else if (key === "/") {
        calculate("/");
    }

    else if (key === "%") {
        calculate("%");
    }

    else if (key === "Enter") {
        calculate("=");
    }

    else if (key === "Backspace") {
        calculate("DEL");
    }

    else if (key === "Escape") {
        calculate("AC");
    }

});
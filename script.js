let display = document.getElementById("display");
let memory = 0;

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// ✅ Fixed Trigonometric Functions (Now uses Radians)
function calculateSin() {
    display.value = Math.sin(eval(display.value) * Math.PI / 180).toFixed(5);
}

function calculateCos() {
    display.value = Math.cos(eval(display.value) * Math.PI / 180).toFixed(5);
}

function calculateTan() {
    display.value = Math.tan(eval(display.value) * Math.PI / 180).toFixed(5);
}

function squareRoot() {
    display.value = Math.sqrt(eval(display.value)).toFixed(5);
}

function power() {
    display.value = Math.pow(eval(display.value), 2);
}

function calculateLog() {
    display.value = Math.log10(eval(display.value)).toFixed(5);
}

function calculateExp() {
    display.value = Math.exp(eval(display.value)).toFixed(5);
}

// ✅ Memory Storage Functions
function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    display.value = memory;
}

function memoryAdd() {
    memory += eval(display.value);
}

function memorySubtract() {
    memory -= eval(display.value);
}
function factorial() {
    let num = eval(display.value);
    if (num < 0) {
        display.value = "Error";
        return;
    }
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    display.value = fact;
}

function calculateCube() {
    display.value = Math.pow(eval(display.value), 3);
}

function calculateInverse() {
    display.value = (1 / eval(display.value)).toFixed(5);
}

function calculateRadians() {
    display.value = (eval(display.value) * (Math.PI / 180)).toFixed(5);
}


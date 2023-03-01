// add function
function add(a, b){
    return a + b;
}

// substract function
function subtract(a, b){
    return a - b;
}

// multiply function
function multiply(a, b){
    return a * b;
}

//divide function
function divide(a, b){
    return a / b;
}

function operate(func, a, b){
    return func(a, b);
}

// adds numbers to the display

const numberButtons = document.querySelectorAll('.number');
let output = document.querySelector('output')

output.textContent = 0;

numberButtons.forEach(button => {
    button.addEventListener('click',() =>{
        const value = button.value
            if(output.textContent == 0){
                output.textContent = value;
            } else {
                output.textContent += value;
            }
    })
});

// resets the display

const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', () => output.textContent = 0);

const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', () => {
        const valueArray = output.textContent.split('');
        const newArray = valueArray.pop();
        const newValue = valueArray.toString().replace(/[^A-Za-z0-9]/g, "");
        output.textContent = newValue;
    });
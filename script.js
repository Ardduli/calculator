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
let output = document.getElementById('outputValue');
let storage = document.getElementById('outputStorage');
output.textContent = 0;

numberButtons.forEach(button => {
    button.addEventListener('click',() =>{
        const value = button.value
            if(output.textContent !== '0'){
                output.textContent += value;
            } else {
                output.textContent = value;
            }
    })
});

// add dot and check if it is the only dot
const dotButton = document.querySelector('.dot');
    
    dotButton.addEventListener('click', () => {
        let dotValue = 0;
        value = '.'
        if(output.textContent.includes('.')){
            dotValue = 1;
        } else {
            dotValue === 0;
        }
        
        if(dotValue === 0) {
            output.textContent += value;
        } 
 });
// resets the display

const outputs = document.querySelectorAll('output');

const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', () => 
     outputs.forEach(output => output.textContent = 0)
    );

// clears the numbers
const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', () => {
        if (output.textContent != 0){
        const valueArray = output.textContent.split('');
        const newArray = valueArray.pop();
        const newValue = valueArray.toString().replace(/,/g, "");
        if(newValue != '') {
        output.textContent = newValue;
        } else { output.textContent = 0;}
        } 
    });

// just to test the reset buttons
    const equal = document.getElementById('=');
        equal.addEventListener('click',() =>{
        if(storage.textContent == 0){ 
            storage.textContent = output.textContent;
        } else {
            storage.textContent += output.textContent;
    }
    })
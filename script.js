function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}


console.log(add(8, 2));
console.log(subtract(8, 2));
console.log(multiply(8, 2));
console.log(divide(8, 2));





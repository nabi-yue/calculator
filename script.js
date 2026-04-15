let one = document.querySelector("#number-one");
let numOne
let numTwo
let operationSymbol

function addition(numOne, numTwo){
    return numOne + numTwo;
}

function subtraction(numOne, numTwo){
    return numOne - numTwo;
}

function multiplication(numOne, numTwo){
    return numOne * numTwo;
}

function division(numOne, numTwo){
    return numOne/numTwo;
}

function operate(numOne, numTwo, operationSymbol){
    switch(operationSymbol){
        case '+':
            return addition(numOne, numTwo);
        case '-':
            return subtraction(numOne, numTwo);
        case '*':
            return multiplication(numOne, numTwo);
        case '/':
            return division(numOne, numTwo);
    }
}


let displayedNumber = document.querySelector(".output");
const signPad = document.querySelector(".operation-container");
const numberPad = document.querySelector(".number-container");
let numClicked
let chosenOperator;
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



numberPad.addEventListener("click", (e)=>{
    displayedNumber.textContent = e.target.textContent;
    numClicked = e.target.textContent.parseInt();
    console.log(numClicked);

})


signPad.addEventListener("click", (e)=> {
    chosenOperator = e.target.textContent.toString();
    displayedNumber.textContent = chosenOperator;
    
    switch(chosenOperator){
        case '+':
            console.log(chosenOperator)
            break;
    }

})
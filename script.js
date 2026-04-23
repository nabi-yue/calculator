let displayedNumber = document.querySelector(".output");
let screen = document.querySelector(".screen");
const signPad = document.querySelectorAll(".operation-buttons");
let firstToDisplay = document.createElement("p");
let secondToDisplay = document.createElement("p");
let operationToDisplay = document.createElement("p");
const numberPad = document.querySelectorAll(".number-buttons");
let numClicked;
let chosenOperator;
let numberOfClicks = 0;
let numOne;
let numTwo;
let operationSymbol;

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


numberPad.forEach((number)=>{
    number.addEventListener("click", ()=> {
        numClicked = parseInt(number.textContent, 10);
        
        if(numberOfClicks==0){
            numOne = numClicked

            
            firstToDisplay.textContent = numOne
            screen.appendChild(firstToDisplay);

            numberOfClicks++
        } else if(numberOfClicks==1){
            numTwo = numClicked

            secondToDisplay.textContent = numTwo
            screen.appendChild(secondToDisplay);

            numberOfClicks = 0;
        } 

        console.log(numOne);
        console.log(numTwo);
    })
})

signPad.forEach((sign)=>{
    sign.addEventListener("click", () => {
        chosenOperator = sign.textContent.trim();
        if(numberOfClicks==1){
            operationToDisplay.textContent = chosenOperator;
            screen.appendChild(operationToDisplay);
        }
    })
})

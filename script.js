let displayedNumber = document.querySelector(".output");
let screen = document.querySelector(".screen");
const signPad = document.querySelectorAll(".operation-buttons");
let firstToDisplay = document.createElement("p");
let secondToDisplay = document.createElement("p");
let operationToDisplay = document.createElement("p");
const numberPad = document.querySelectorAll(".number-buttons");
let firstSelection = [];
let secondSelection = [];
let numClicked;
let chosenOperator;
let numberOfOperations = 0;
let numOne;
let numTwo;
let operationSymbol;
let typeOfOperation;
let result;

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
            return result = Math.round((addition(numOne, numTwo))*100)/100;
        case '-':
            return result = Math.round((subtraction(numOne, numTwo))*100)/100;
        case 'x':
            return result = Math.round((multiplication(numOne, numTwo))*100)/100;
        case '÷':
            if(numOne == 0 || numTwo == 0){
                return result = "NOPE"
            } else {
                return result = Math.round((division(numOne, numTwo))*100)/100;
            }
            
    }
}

function getNumber(numArray){
    if(numberOfOperations==0){
        return numOne = Number(numArray.join(''))
    } else if(numberOfOperations==1){
        return numTwo = Number(secondSelection.join(''))
    }
}

function clearAll(){
    firstSelection = []
                numOne = 0
                secondSelection = []
                numTwo = 0
                numberOfOperations = 0
                typeOfOperation = '';
                result = 0
}

numberPad.forEach((number)=>{
    number.addEventListener("click", ()=> {
        numClicked = parseInt(number.textContent, 10);

        if(numberOfOperations==0){
            firstSelection.push(numClicked);
            displayedNumber.textContent = firstSelection.join('')
            console.log(firstSelection)
        } if(numberOfOperations==1){
            secondSelection.push(numClicked);
            displayedNumber.textContent = numOne+typeOfOperation+secondSelection.join('')
            console.log(secondSelection)
        }



    })
})

signPad.forEach((sign)=>{
    sign.addEventListener("click", () => {
        chosenOperator = sign.textContent.trim();        
        console.log(chosenOperator)
        switch(chosenOperator){
            case '+':
                if(numberOfOperations==0){
                    typeOfOperation = '+'
                    getNumber(firstSelection)
                    displayedNumber.textContent = numOne+typeOfOperation
                    numberOfOperations++
                } else if (numberOfOperations==1){
                    getNumber(secondSelection)
                    operate(numOne, numTwo, typeOfOperation)
                    displayedNumber.textContent = result
                    typeOfOperation = '+'
                    console.log(result)
                    numOne = result
                    secondSelection = []
                    numTwo = 0
                    numberOfOperations = 1
                }
                break;
            case '-':
                
                if(numberOfOperations==0){
                    typeOfOperation = '+'
                    getNumber(firstSelection)
                    displayedNumber.textContent = numOne+typeOfOperation
                    numberOfOperations++
                } else if (numberOfOperations==1){
                    getNumber(secondSelection)
                    operate(numOne, numTwo, typeOfOperation)
                    displayedNumber.textContent = result
                    typeOfOperation = '-'
                    console.log(result)
                    numOne = result
                    secondSelection = []
                    numTwo = 0
                    numberOfOperations = 1
                }
                break;
            case 'x':
                if(numberOfOperations==0){
                    typeOfOperation = 'x'
                    getNumber(firstSelection)
                    displayedNumber.textContent = numOne+typeOfOperation
                    numberOfOperations++
                } else if (numberOfOperations==1){
                    getNumber(secondSelection)
                    operate(numOne, numTwo, typeOfOperation)
                    displayedNumber.textContent = result
                    typeOfOperation = 'x'
                    console.log(result)
                    numOne = result
                    secondSelection = []
                    numTwo = 0
                    numberOfOperations = 1
                }
                break;
            case '÷':
                if(numberOfOperations==0){
                    typeOfOperation = '÷'
                    getNumber(firstSelection)
                    displayedNumber.textContent = numOne+typeOfOperation
                    numberOfOperations++
                } else if (numberOfOperations==1){
                    getNumber(secondSelection)
                    operate(numOne, numTwo, typeOfOperation)
                    displayedNumber.textContent = result
                    typeOfOperation = '÷'
                    console.log(result)
                    numOne = result
                    secondSelection = []
                    numTwo = 0
                    numberOfOperations = 1
                }
                break;
            case '=':
                getNumber(secondSelection)
                operate(numOne, numTwo, typeOfOperation)
                displayedNumber.textContent = result
                console.log(result)
                clearAll()
                break;
            case '<-':
                if(numberOfOperations==0){
                    firstSelection.pop();
                    displayedNumber.textContent = firstSelection.join('')
                    
                } else if (numberOfOperations==1){
                    secondSelection.pop();
                    displayedNumber.textContent = numOne+typeOfOperation+secondSelection.join('')
                }
                break;
            case 'clear':
                clearAll()
                console.log(firstSelection,numOne, numTwo,result)
                break;
        }
    })
})

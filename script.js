// Declaração das variaveis
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('#operator')
const actualR = document.querySelector('[data-actual-result]')
const previousR = document.querySelector('[data-prev-result]')


//Set numbers for the calc
let actualNumber = 0
let previousNumber = 0

//Add numbers to the calc
numbers.forEach(button =>{
    button.addEventListener('click', () =>{
        if(actualR.innerText === "0") actualR.innerText = null
        actualR.innerText += button.innerText

    })
})


//Set the calc
function preCalc(){
    previousNumber = previousR.innerText || 0
    actualNumber = actualR.innerText || 0
}

//Reset the calc
function posCalc(){
    actualR.innerText = '0'
}

//Set the operations check
let multi = false
let div1 = false
let div2 = false


//Calculator
operators.forEach(button =>{
    button.addEventListener('click', e =>{
        switch(multi ? "multiplication" : div1 ? "division" : div2 ? "division%" : e.target.name) {
            case"plus":
                preCalc()
                previousR.innerText = parseFloat(previousNumber) + parseFloat(actualNumber)
                posCalc()
                break

            case"minus":
                preCalc()
                previousR.innerText = parseFloat(previousNumber) - parseFloat(actualNumber)
                posCalc()
                break;

            case"multiplication":
                if(multi === false && actualNumber !== "0"){
                    previousR.innerText = actualR.innerText
                    actualR.innerText = "0"
                    multi = true
                    return
                }

                preCalc()
                previousR.innerText = parseFloat(previousNumber) * parseFloat(actualNumber)
                posCalc()
                multi = false
                break;

            case"division":
                if(div1 === false && actualNumber !== "0"){
                    previousR.innerText = actualR.innerText
                    actualR.innerText = "0"
                    div1 = true
                    return
                }
                
                preCalc()
                previousR.innerText = parseFloat(previousNumber) / parseFloat(actualNumber)
                posCalc()
                div1 = false
                break;

            case"division%":
                if(div2 === false){
                    previousR.innerText = actualR.innerText
                    actualR.innerText = "0"
                    div2 = true
                    return
                }
                
                preCalc()
                previousR.innerText = parseFloat(previousNumber) % parseFloat(actualNumber)
                posCalc()
                div2 = false
                break;

            case"clear":
                actualR.innerText = "0"
                break;

            case"clearAll":
                actualR.innerText = "0"
                previousR.innerText = ""
                break;

            default:

                break
        }
    })
})
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterKey)

//Função
function handleTryClick(event){
    event.preventDefault()
    
    if(inputNumber.value >= 0 && inputNumber.value <= 10 && inputNumber.value != ""){
        const inputNumber = document.querySelector("#inputNumber")
    
        if(Number(inputNumber.value) == randomNumber) {
            toggleScreen()
            screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
        }
    
        inputNumber.value = ""
        xAttempts++
    }else {
        alert("Tentativa invalida! Coloque um número de 0 a 10.")
    }

}

function handleResetClick(){
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function enterKey(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}
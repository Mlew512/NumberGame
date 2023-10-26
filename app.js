console.log("HELLO PAPA PLATOON!")

number = Math.floor(Math.random() * 100)
console.log(number)
const d1= document.getElementById('prev_guesses')

// Your function(s) should go here that will interact with the webpage or DOM
function guess(){
    let theGuess= document.getElementById("input-number").value
    let output= document.getElementById('output')
    console.log(theGuess)
    if (theGuess == number){
        output.innerText = `${theGuess} is Correct!`
        let newText = document.createTextNode(`${theGuess} is Correct!\n` )
        d1.appendChild(newText)
        triggerConfetti();
    }
    else if(isNaN(theGuess)){
        output.innerText = `${theGuess} is not a number try again`
    }
    else if(theGuess < number){
        output.innerText = `${theGuess} is too low`
        let newText = document.createTextNode(`${theGuess}\n`)
        d1.appendChild(newText)
    }else{
        output.innerText =`${theGuess} is Too High`
        let newText = document.createTextNode(`${theGuess}\n`)
        d1.appendChild(newText)
    }
}
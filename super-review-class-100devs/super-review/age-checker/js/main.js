//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
let h1Val = document.querySelector("#paragraphH1")
h1Val.addEventListener("click", checkAge)
function checkAge(){
    inputVal = document.querySelector("#danceDanceRevolution").value
    resultP = document.querySelector("#result")
if(inputVal < 16) {
    resultP.innerText = "Cannot Drive"
}else if(inputVal < 18){
    resultP.innerText = "Cant enter the club"
}else if(inputVal < 21){
    resultP.innerText = "Cannot Drink"
}else if(inputVal < 25){
    resultP.innerText = "Cannot rent  cars"
}else if(inputVal <= 30){
    resultP.innerText = "Cannot rent fancy cars"
}else{        
    resultP.innerText = "Nothing Left"
}
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

//Create a conditonal that checks their age
age = document.querySelector("#danceDanceRevolution").value


//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
h1Value = document.querySelector("h1").innerText
document.querySelector("h1").addEventListener("click", placeConditional)
function placeConditional(ageInput){
    if (ageInput < 16){
        h1Value = "You can't drive"
    }else if (ageInput <18 && ageInput > 16){
        h1Value = "can't hate from outside the club, because they can't even get in"
    }else if(ageInput < 21) {
        h1Value = "they can not drink"
    }else if(ageInput < 25){
        h1Value = "can not rent cars affordably"
    }else if(ageInput < 30){
        h1Value = "can not rent fancy cars affordably"
    }else {
        h1Value =  "there is nothing left to look forward too"
    }
    
}

placeConditional(age)

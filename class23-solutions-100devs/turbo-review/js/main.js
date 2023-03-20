// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sent = "Hello neighbor?"
if (sent.includes("?")) {
    alert("Yes")
}else {
    alert("No")
}
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multiple = "Multiple Words Ok? jr. dev"
if (multiple.includes("jr. dev")){
    
    console.log(multiple.replace("jr. dev", "software engineer"))
}else {
    console.log("Doens't have")
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockpaper () {
    randomNum = Math.random()
    if (randomNum <= 0.33) {
        return "Rock"
    }else if (randomNum <= 0.66) {
        return "Paper"
    }else {
        return "Scissors"
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function takeChoice() {
    userChoice = rockpaper()
    botChoice = rockpaper()
    if (userChoice == "Rock" && botChoice == "Scissors" || userChoice == "Paper" && botChoice == "Rock" || userChoice == "Scissors" && botChoice == "Paper") {
        console.log("User Win")
        console.log(`userChoice = ${userChoice} // botChoice = ${botChoice}`)
    }else if (userChoice == "Rock" && botChoice == "Paper" || userChoice == "Paper" && botChoice == "Scissors" || userChoice == "Scissors" && botChoice == "Rock"){
        console.log("Bot Win")
        console.log(`userChoice = ${userChoice} // botChoice = ${botChoice}`)
    }else if (userChoice === botChoice) {
        console.log("Tie")
    }else {
        console.log(`Error: userChoice = ${userChoice} // botChoice = ${botChoice}`)
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function takesArr(arr) {
    arr.forEach(choice => {
        return takeChoice()
    });
}

takesArr([1, 2, 3, 4,5 ,6 ,7])
// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = "Coke With my Friends"
drink = drink.trim()
console.log(drink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multi = "Apple Pie"
if (multi.search("Apple") !== -1){
    console.log("Yes")
}else{
    console.log("No")
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function jokenPo(){
    randomNum = Math.random()
    if (randomNum < 0.33) {
        return "Rock"
    }else if (randomNum < 0.66) {
        return "Paper"
    }else {
        return "Scissors"
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function choice(choiceOption){
    myChoice = choiceOption
    botChoice = jokenPo()
    if (botChoice == "Rock" && myChoice == "Scissors") {
        console.log("You've lost the game")
        console.log(botChoice)
        console.log(myChoice)
    }else if (botChoice == "Paper" && myChoice =="Scissors"){
        console.log("You've win the game")
        console.log(botChoice)
        console.log(myChoice)
    }else if (botChoice == myChoice){
        console.log("Empate")
        console.log(botChoice)
        console.log(myChoice)
    }else if (botChoice == "Rock" && myChoice =="Paper"){
        console.log("You've won the game")
        console.log(botChoice)
        console.log(myChoice)
    }else if (botChoice == "Scissors" && myChoice =="Paper"){
        console.log("You've lost the game")
        console.log(botChoice)
        console.log(myChoice)
    }else if (botChoice == "Paper" && myChoice =="Rock"){
        console.log("You've lost the game")
        console.log(botChoice)
        console.log(myChoice)
    }else if (botChoice == "Scissors" && myChoice =="Rock"){
        console.log("You've won the game")
        console.log(botChoice)
        console.log(myChoice)
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
choices = ["Scissors", "Rock", "Paper","Scissors", "Rock", "Paper","Scissors", "Rock", "Paper","Scissors", "Rock", "Paper","Scissors", "Rock", "Paper"]
choices = choices.sort()
function playTheGame (){
    for (i=0; i < choices.length - 1; i++) {
        choice(choices[i])
        console.log(i)
    }
}
playTheGame()
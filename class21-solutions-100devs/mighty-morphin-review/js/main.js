// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let day = "BIRTHDAY"
console.log(day)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let strn = "String"
alert(strn.slice(3, 6))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function takesfiv(num1, num2, num3, num4, num5) {
    counter = num1 + num2 + num3 + num4 + num5
    alert(100 - counter)
    
}
takesfiv(3, 5, 2, 10, 30)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function takesthr( num1, num2, num3) {
    console.log(Math.max(num1, num2, num3))
    console.log(Math.min(num1, num2, num3))
}
takesthr(10, 20,30)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
let tails = 0
let heads = 0
function random(){
    
    let randomNum = Math.ceil(Math.random() * 100)
    console.log(randomNum)
        if (randomNum <= 50) {
            heads += 1
        }else {
           tails += 1
        }

    
}

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function takesanum(num1) {
    for (i=0; i < num1; i++){
        random()
    }
    console.log(`Tails appeared ${tails} times, and Heads appeared ${heads} times`)
    
}

takesanum(150)


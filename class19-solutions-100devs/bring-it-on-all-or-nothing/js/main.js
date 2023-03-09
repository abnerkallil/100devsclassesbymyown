// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let bool = true
alert(bool)

// Declare a variable, reassign it to your favorite color, and console log the value
let color = "black"
console.log(color)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function suming (num1, num2, num3, num4) {
    return (num1 + num2 + num3) / num4
}
alert(suming(10, 20, 30, 4))

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function twoNum(num1, num2) {
    console.log(num1 ** num2 )
}
twoNum(10, 10)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function cond (bool1, str2) {
    if (bool1 == true) {
        alert(str2)
    }else{
        console.log(str2)
    }
}
cond(true, "Hello")

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function loops (num1){
    for (i=1; i < num1; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz")
        }else if(i % 3 == 0){
            console.log("Fizz")
        }else if(i % 5 == 0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}

loops(100)
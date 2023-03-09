document.querySelector("#check").addEventListener("click", day)
// *Variables*
// Declare a variable, assign it a value, and alert the value
var num10 = 10
console.log(num10)
// Create a variable, divide it by 10, and console log the value
var num20 = 30
console.log(num20 / 10)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multi(num1, num2, num3) {
    alert(num1 * num2 * num3)
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function various(num1, num2, num3, num4) {
    console.log((num1 + num2) - (num3 + num4))
}
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function treenumber(num1, num2, num3) {
    counter = 100
    if ((counter + num1) - num2 / num3 > 25){
        console.log("We have a winner")
    }else {
        console.log("Not this time")
    }
}
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function day(){
    let daysInput = document.querySelector("#days").value.toLowerCase()
    console.log(daysInput)
    if (daysInput === "sunday" || daysInput === "saturday"){
        console.log("Weekend")
    }else {
        console.log("Week DAy")
    }

}
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function loop (num1) {
    for (i = 0; i < num1; i += 3){
        console.log(i)
    }
}

multi(10, 20, 30)
various(10, 20, 30, 40)
treenumber(10, 20, 30)
loop (10)
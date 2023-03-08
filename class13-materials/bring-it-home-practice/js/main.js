// *Variables*
// Create a variable and console log the value
var clicked = 10
console.log(clicked)
// Create a variable, add 10 to it, and alert the value
var counter = 10
counter += 10
console.log(counter)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function reduceCounter(){
    counter -= 4
    console.log(counter)
}
reduceCounter()
// Create a function that divides one number by another and returns the remainder
 function divideCounter(){
    var result = counter / clicked
    console.log(result)
 }
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function add (){
    if (counter + clicked == 50){
        alert("Jumanji")
    }
    else {
        alert("Old Jumanji")
    }
}
add()
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multi () {
    total = counter * clicked * 30
    if (total % 3 === 0){
        alert("Zebra")
    }
    else{
        alert("Lion")
    }
}
multi()
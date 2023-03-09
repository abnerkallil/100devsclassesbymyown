// *Variables* 
// Create a variable and console log the value
let num = 10
console.log(num)

// Create a variable, add 10 to it, and alert the value
let num2 = 30
num2 += 10
alert(num2)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(num1, num2, num3, num4){
    alert(num1 - num2 - num3 - num4)
}
// Create a function that divides one number by another and returns the remainder
function divide(num1, num2){
    return num1 / num2
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function add (num1, num2) {
    if (num1 + num2 == 50) {
        alert("Jumanji")
    }else{
        alert("Error Func ADD")
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multi(num1, num2, num3) {
    if ((num1 / num2 / num3) % 3 > 0) {
        alert("Zebra")
    }else{
        alert("Error Func MULTI")
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function takes (word1, num1){
    for (i = 0; i < num1 + 1; i++){
        console.log(word1)
    }
}

sub(1, 2, 5, 10)
divide(10, 20)
add(10, 20)
multi(10, 50, 80)
takes("Hello", 80)

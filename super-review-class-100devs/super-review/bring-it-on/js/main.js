// *Variables*
// Create a variable and console log the value
let  number = 10
console.log(number)
// Create a variable, add 10 to it, and alert the value
let texting = 0
texting += 10
alert(texting)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(num1, num2, num3, num4) {
    alert(num1 - num2 - num3 - num4)
}
// Create a function that divides one number by another and returns the remainder
function divide(num1, num2){
    console.log(num1 % num2)
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function summing(num1, num2){
    if (num1 + num2 > 50){
        alert("Jumanji!")
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
 function multi(num1, num2, num3){
    if((num1 * num2 * num3) % 3 == 0){
        alert("Zebra")
    }
 }
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function looping(word1, num1){
    for (i=0;i<num1;i++){
        console.log(word1)
    }
}
sub(1,2,3,4)
divide(10,20)
summing(10,50)
multi(30, 80, 10)
looping("Weirdo", 20)
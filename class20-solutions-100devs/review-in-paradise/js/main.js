// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = "Strogonoff"
alert(food)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let text = "Hello"
alert(text[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divide (num1, num2, num3) {
    alert((num1 / num2) * num3)
}
divide(40, 50, 10)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cube (num1) {
    console.log(Math.cbrt(num1))
    console.log("é aqui")
}
cube(10)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function summer(month){
    if (month == "December" || month == "January" || month == "February"){
        alert("Yay")
    }else{
        alert("Boooo")
    }
}
summer("December")

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function looping(num1) {
    for (i=1; i<num1; i++){
        if (i % 3 == 0){
            console.log("Multiple of 5")
        }else{
            console.log(i)
        }
    }
}
looping(100)
//--- Easy
//create a variable and assign it a number
let num = 10
//minus 10 from that number
num -= 10
//print that number to the console
console.log(num)
//--- Medium
//create a variable that holds a value from the input


//add 25 to that number

//alert that number

//--- Hard
//create a variable that holds the h1
const h1Val = document.querySelector("#h1Val")
h1Val.addEventListener("click", logValues)
//add an event listener to that element that console logs the sum of the two previous variables
function logValues(){
    let inputVal = parseInt(document.querySelector("#danceDanceRevolution").value)
    inputVal += 25
    alert(inputVal)
}
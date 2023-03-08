//--- Easy
//create a variable and assign it a number
var num = 10
//minus 10 from that number
num -= 10
//print that number to the console
console.log(num)
//--- Medium
//create a variable that holds a value from the input

//add 25 to that number
// inputNum += 25
// //alert that number
// alert(inputNum)
//--- Hard
//create a variable that holds the h1
var text = document.querySelector("h1").addEventListener("click", printOut)
//add an event listener to that element that console logs the sum of the two previous variables
function printOut(){
    let inputNum = document.querySelector("#danceDanceRevolution").value
    console.log(num + Number(inputNum) )
}

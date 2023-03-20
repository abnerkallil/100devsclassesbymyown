//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrNum = [1,2,3,4,5,6,7]
summing = arrNum.reduce((a, i) => a + i, 0) 
console.log(summing)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function takesArr(arr) {
    const newArray = arr.map(x => x*2)
    console.log(newArray)
}
takesArr([10,20,30,40,50])
//Create a function that takes string
//Print the reverse of that string to the console
function takesStr (str) {
    splittedStr = str.split("")
    console.log(splittedStr.reverse().toString())
}
takesStr("Hello")
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function takesStr2(str) {
    splitStr = str.toLowerCase().split("").reverse().toString()
    if (splitStr === str.split("").toString()) {
        alert("Gotcha you")
        alert(splitStr)
        alert(str.split("").toString())
    }else{
        alert("Not Gotcha you")
        alert(splitStr)
        alert(str)
    }
}
takesStr2("kayak")
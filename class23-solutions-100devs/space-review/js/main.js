//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
arrNum = [10,20,30,40,50,60]
alert(arrNum.reduce((a, b) => a + b, 0))
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function numArray(arr){
    let newArray = arr.map(x => x * 2)
    return newArray
}
console.log(numArray([10, 20, 30, 40]))
//Create a function that takes string
//Print the reverse of that string to the console
function takesStr(str) {
    console.log(str.split("").reverse().join(""))
}
takesStr("Hello")
//Create a function that takes in a string
//Alert if the string is a palindrome or not

function takesStr2(str2) {
    toLowerString = str2.toLowerCase()
    if (toLowerString.split("").reverse().join("") === toLowerString){
        alert("Palindrome")
        alert(toLowerString)
        
    }else {
        alert("Not Palindrome")
        alert(toLowerString)
    }
}

takesStr2("Kayak")

//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
let total = 1
function arr(array) {
    array.forEach(element => {
        total = total * element
    });
    alert(total)
}

let numArr = [10, 20, 30, 40, 50, 30]
arr(numArr)
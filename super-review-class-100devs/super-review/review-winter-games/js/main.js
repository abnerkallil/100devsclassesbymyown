//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
newArr = []
function takesArr(arr){
    arr.forEach(num => {
        if (num % 2 == 0){
            newArr.push(num)
        }
        return newArr
    });
}

console.log(takesArr([10, 20, 25, 30, 12, 15, 11, 17, 92]))
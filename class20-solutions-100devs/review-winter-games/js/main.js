//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
evenNums = [] 
function newArr(numsArr) {
    numsArr.forEach(element => {
        if (element % 2 == 0){
            evenNums.push(element)
        }else{
            console.log("Not a Even Number: " + element)
        }
    });
    console.log(evenNums)
 }

 nums = [10,23, 345, 3213, 32, 12, 63, 20, 30, 40, 50]
 newArr(nums)
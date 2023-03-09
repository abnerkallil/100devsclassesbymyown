let h2Holder = document.querySelector("#titles")
let counter = 0
let total = 0
//Create an array of movie titles. Loop through the array and each element to the h2.
let movieT = ["Panicc", "Paniccc", "Paniccs", "Paniccss"]
movieT.forEach((x) => {
    h2Holder.innerText += x
})

//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let nums = [10, 20, 30, 50]
nums.forEach((x, i, a) => {
    nums[i] = x + 3
    console.log(nums)

})
//Find the average of all the numbers from question three
nums.forEach((x) => {
    total =  total + x

})
console.log(total / nums.length )
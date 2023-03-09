//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tv = ["Arrow", "Batman", "Gotham", "Flash"]
for (i=0; i< tv.length; i++){
    console.log(tv[i])
}
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [10,23,31,400,60]
let nums1 = nums.map(x => {
    if (x % 2 == 0) {
        return x
    }else{
        return "not even"
    }
})

let onlyEven = arr => arr.filter( n => n % 2 === 0 )
console.log(onlyEven(nums))

console.log(nums1)
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function takesarr(num){
    let sorte = num.sort((a,b) => a-b)
    alert(sorte[1] + sorte[sorte.length - 2]) 
}
takesarr([10,25, 20, 30, 50, 232, 100])

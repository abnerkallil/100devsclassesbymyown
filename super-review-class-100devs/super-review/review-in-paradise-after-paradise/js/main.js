// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function takesArr(arr){
    if(arr[0] < arr[arr.length -1]){
        alert("Hi")
        console.log(arr[arr.length -1])
    }else if(arr[0] > arr[arr.length -1]){
        alert("Bye")
    }else if (arr[0] == arr[arr.length -1]){
        alert("We Close in a Hour")
    }
    else{
        console.log(arr[arr.length -1])
    }

}
takesArr([20, 20, 30, 25, 20])
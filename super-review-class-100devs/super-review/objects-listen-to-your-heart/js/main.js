//Create a stopwatch object that has four properties and three methods
let stopWatch = {
    
}
stopWatch.color = "black"
stopWatch.shape = "rounded"
stopWatch.brand = "cassio"
stopWatch.model = "X"
stopWatch.showTime = function( ){
    console.log("DATEE")
}
stopWatch.start = function (){
    console.log("Counting..")
}
stopWatch.bip = function(){
    console.log("BIP BIP BIP")
}
console.log(stopWatch)
stopWatch.showTime()
stopWatch.start()
stopWatch.bip()
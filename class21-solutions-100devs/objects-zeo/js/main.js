//Create a stopwatch object that has four properties and three methods
let stopwatch = {
    model: "Zeo",
    color: "White",
    shape: "Rounded",
    brand: "Rolex",

    showTime: function show(){
        console.log("Right now is 09:00 pm")
    },
    showBrand: function brand() {
        console.log(`My brand is: ${stopwatch.brand}`)
    },
    changeColor: function change() {
        stopwatch.color = "Black"
        console.log(`My color is ${stopwatch.color}`)
    }
}

stopwatch.showTime()
stopwatch.showBrand()
stopwatch.changeColor()
console.log(stopwatch.model)
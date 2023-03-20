//Create a mouse object that has four properties and three methods
let mouse = {
    color :"black",
    brand: "Razer",
    model: "Viper Mini",
    size: "Mini",

    scroll : function () {
        console.log("scrolling")
    },
    move : function() {
        console.log("Moving")
    },
    changeDpi : function () {
        console.log("Changing!!!")
    }
}

console.log(mouse.color)
console.log(mouse.brand)
console.log(mouse.model)
console.log(mouse.size)
mouse.scroll()
mouse.move()
mouse.changeDpi()
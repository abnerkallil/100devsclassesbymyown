//Create a dog object that has four properties and three methods
let dog ={}

dog.color  = "Red"
dog.size = "Small"
dog.call = "Auau"
dog.sleep = "Sleep"

dog.eat = function () {
    console.log("Dont get better than this")
}

dog.run = function () {
    console.log("Running")
}

dog.jump = function () {
    console.log("Jumping")
}

dog.jump()
console.log(dog.color)
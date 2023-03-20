//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter (fighterName, fighterHeight, fighterNacionality, fighterPower){
    this.name = fighterName,
    this.height = fighterHeight,
    this.nacionality = fighterNacionality,
    this.power = fighterPower,

    this.sayPower = function () {
        console.log(`My Power is ${this.power}`)
    }
    this.protectCountry = function () {
        console.log(`I will protect ${this.nacionality}`)
    }
    this.greeting = function () {
        console.log(`Hi my name is ${this.name} from ${this.nacionality}, my power is ${this.power}`)
    }
}

let barakaa = new StreetFighter("Barakaa", 1.98, "India", "Grow bones from my hand")
let kitanaa = new   StreetFighter("Kitanaa", 1.60, "Japan", "I have a ")
barakaa.greeting()
barakaa.protectCountry()
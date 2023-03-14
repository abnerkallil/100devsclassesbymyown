//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
 function StreetFighter(name, power, nation, phrase){
    this.name = name
    this.power = power
    this.nation = nation
    this.phrase = function(){
        console.log(phrase)
    }
    this.usePower = function(){
        console.log(`Using ${power}`)
    }
 }
 let baraka = new StreetFighter("Baraka", "Forkss", "Hell", "Get over here" )
 console.log(baraka)
 baraka.phrase()
 baraka.usePower()
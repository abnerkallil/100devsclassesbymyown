//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function MakeTonyHawkSkater(skaterName, skaterColor, skaterSize, skaterSkate) {
    this.name = skaterName
    this.color = skaterColor
    this.size = skaterSize
    this.skate = skaterSkate

    this.skating = function () {
        console.log("RUmmmmm")
    }

    this.backflip = function () {
        console.log("Turn Up")
    }
    this.smoke = function () {
        console.log("Go get the Green")
    }
}

let tonyHawk = new MakeTonyHawkSkater("TonyHawk", "White", 1.97, "The better one")
console.log(tonyHawk)
tonyHawk.backflip()
console.log(tonyHawk.size)
//Create a constructor with 4 properties and 3 methods
 function PizzaFactory(pizzaFlavour, pizzaBorder, pizzaSize, pizzaSauce){
    this.flavour = pizzaFlavour,
    this.border = pizzaBorder,
    this.size = pizzaSize,
    this.sauce = pizzaSauce,

    this.getSauce = function () {
        console.log(`Dropping the ${this.sauce} sauce`)
    }
    this.snacks = function() {
        console.log(`Eating the ${this.flavour} pizza`)
    }
    this.theSize= function () {
        console.log(`WTF is that ${this.size} size?`)
    }
 }

 let mussarelaPizza = new PizzaFactory("Mussarella", "Catupiry", "Medium", "Tomato")
 console.log(mussarelaPizza)
 console.log(mussarelaPizza.flavour)
 mussarelaPizza.getSauce()
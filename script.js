//starter code
//python -m http.server
let animalPopulation = 0
function run() {
var tigger = new Tiger("Tigger");
tigger.eat("meat");
var pooh = new Bear("Pooh");
pooh.eat("fish");
pooh.eat("meat");
var rarity = new Unicorn("Rarity")
rarity.eat("marshmallow")
rarity.sleep();
var gemma = new Girrafe("Gemma")
gemma.eat("meat");
gemma.eat("leaves");
var stinger = new Bees("Stinger")
stinger.eat("ice cream");
stinger.eat("pollen");
stinger.sleep();
let array = [tigger, rarity, gemma, stinger]
var zoebot = new Zookeeper("Zoebot")
zoebot.feedAnimals("meat", array )


  }
  class Animal {

    constructor(n, ff ) {
      this.name = n;
      this.favoriteFood = ff; 
      animalPopulation++;     
    }

    sleep() {
       console.log(this.name + " sleeps for 8 hours")
    }

    eat(food) {
        console.log( this.name + " eats " + food)
        if (this.favoriteFood == food){
          console.log("YUM!!! " + this.name + " wants more " + food)
        } else {
          this.sleep()
        }
    }

    static getPopulation() {
      return animalPopulation
  }

}
  class Zookeeper {
    constructor(name) {
      this.name = name

    }
    feedAnimals(food,animals) {
       console.log( this.name + " is feeding " + food + " to " + animals.length + " of " + Animal.getPopulation() +  " total animals")
       for (let i = 0; i < animals.length; i++) {
        animals[i].eat(food)
       }
    }
  }
  
  



  class Tiger extends Animal {
    constructor(name) {
        super(name, "meat");
    }

    
}
class Bear extends Animal {
  constructor(name) {
        super(name, "fish");
    }
     sleep() {
       console.log(this.name + " hibernates for 4 months ")

     
     }
}

  class Girrafe extends Animal {
    constructor(name) {
        super(name, "leaves");
    }
    eat(food) {
      if (food != this.favoriteFood) {
        console.log("YUCK!!! " + this.name + " will not eat " + food)
      } else {
        super.eat(food)
      }
    }

    
}

  class Bees extends Animal {
    constructor(name) {
        super(name, "pollen");
    }
    eat(food) {
      if (food != this.favoriteFood) {
        console.log("YUCK!!! " + this.name + " will not eat " + food)
      } else {
        super.eat(food)
      }
    }
    sleep() {
      console.log(this.name + " never sleeps")
    }

    
}

  class Unicorn  extends Animal {
    constructor(name) {
        super(name, "marshmallow");
    }
 sleep() {
       console.log(this.name + " sleeps in a cloud ")
 }
}

/**
 * JavaScript objects
 * 
 * These objects can have (represented as key value pairs): 
 * - methods
 * - properties
 * 
 */

// Object literal

const menu = {
  dishes: [
    {
      id: 1,
      name: 'Turkey',
      description: 'sadsadsadasd',
      price: 20,
      currency: 'RON',
      ingredients: ['1', '2'],
    },
    {
      id: 2,
      name: 'Turkey',
      description: 'sadsadsadasd',
      price: 30,
      currency: 'RON',
      ingredients: ['1', '2'],
    },
  ],
  callWaiter: function() {
    console.log('Come here please!');
  }
};

/**
 * Classes (Templates, Blueprints)
 */

// Constructor function -> Blueprint to create objects

function Dish(id, name, description, price, currency, ingredients) {
  // this - lets us set properties to the function

  this.id = id;
  this.name = name;
  this.content = description;
  this.price = price;
  this.currency = currency;
  this.ingredients = ingredients;

  this.sayHello = function() {
    return `Hello world`;
  };
}

// In order to create an object from a class / Constructor function we need to use the new keyword

const dish = new Dish(1, 'Turkey', 'dasdsad', 20, 'RON', ['1', '2']);
const dish2 = new Dish(2, 'Somon', 'dsada', 30, 'RON', ['1', '2']);

console.log(dish.sayHello());
console.log(dish2.sayHello());

// In JavaScript everything is an object

const firstName = 'Tudor';

new Boolean();
new Number();
new String(firstName);
console.log(firstName.length);


// function Animal(limbs, race) {
//   this.limbs = limbs;
//   this.race = race;

//   this.walk = function() {
//     console.log('I am walking');
//   }

//   this.fly = function() {
//     console.log('I am flying');
//   }

//   this.eat = function() {
//     console.log('I am eating');
//   }

//   this.sayHello = function() {
//     console.log('Hello from animal');
//   }
// }

// const animal = new Animal(4, 'Mammals');

// function Bear(limbs, race) {
//   this.limbs = limbs;
//   this.race = race;

//   // Method override
//   this.sayHello = function () {
//     console.log('Hello from bear');
//   }
// }

// Inheritance - Mostenire 
// Prototypal inheritance 

// Bear.prototype = animal;

// Bear.prototype.eat = animal.eat;
// Bear.prototype.walk = animal.walk;
// Bear.prototype.sayHello = animal.sayHello;

// const grizzly = new Bear(4, 'Grizzly');

// console.log({ grizzly });
// console.log(grizzly.sayHello());


// Class based inheritance

// The class has no arguments
// How do we pass in arguments?
// It turns out the classes have a method that is called automatically when the object is created

function sayHi() {

}

class Animal {
  limbs = 4;
  #pi = 3.14;

  constructor(race) {
    this.race = race;
    this.limbs = 'something';
    // This calls method defined on the class;
    this.sayHi();
    // This calls external function
    sayHi();

    this.bindedShowMood = this.showMood.bind(this);
  }

  walk() {
    console.log('I am walking');
  }

  sayHi = () => {
    console.log('Hi from animal');
  }

  // Arrow function encloses this correctly

  showMood = () => {
    this.walk();
    console.log(this);
    console.log(this.mood);
  }
}

class Bear extends Animal {
  constructor(race, mood) {
    super(race);

    this.mood = mood;
  }
}

class KoalaBear extends Bear {
  
}

const grizzly = new Bear('Grizzly', 'Happy');

grizzly.showMood();
const grizzly2 = new Bear( 'Polar', 'Sad');
const grizzly3 = new Bear( 'Brown', 'Angry');
const grizzly4 = new Bear( 'Koala', 'Playful');

console.log({grizzly, grizzly2, grizzly3, grizzly4});
console.log(Object.getPrototypeOf(grizzly));

const arr = [];

const newObj = {
  mood: 'Test mood'
};

const showMood = grizzly.showMood; //.bind(newObj); -> Doesn't call the method
// call -> Calls the method
// grizzly.showMood.call(newObj);
// apply

showMood();

// Getter and setter methods
// Magic methods
class House {
  #door = 0;

  get door() {
    return this.door;
  }

  set door(number) {
    this.door = number;
  }

  setDoor(number) {
    this.door = number;
  }

  getDoor() {
    return this.door;
  }
}

const house = new House();

house.door = 5;
console.log(house.door);

house.setDoor(10);
console.log(house.getDoor());

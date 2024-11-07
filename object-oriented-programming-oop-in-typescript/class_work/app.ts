// Object Oriented Programming ( OOP )

// first of all class keyword then  

class Human {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    eat(desh: string) {
        console.log(`${this.name}, eating ${desh}`);      // this empty object , 
//                                             create new keyword this = {}
        
    }
}

const user1 = new Human('Usama');
const user2 = new Human('Hamza');

console.log(user1.name);     // Usama
console.log(user2.name);     // Hamza

user1.eat('apple');     // Usama, eating apple
user2.eat('orange');     // Hamza, eating orange


class Animal {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    eat() {
        console.log(`${this.name}, eating`); 
        
    }

    run() {
        console.log(`${this.name} , run very fast!`);
        
    }
}


class WildAnimal {
    title: string;

    constructor(n: string) {
        this.title = n;
    }

    eat() {
        console.log(`${this.title}, is a Wild Animal and is eating`); 
        
    }
}


class Robot {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

let h: Human = new Human('Tom');
let a: Animal = new Animal('Goat');
let r: Robot = new Robot('R2-D2');
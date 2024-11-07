// TypeScript Object Oriented Programming (OOP)
/*
const myCar = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2024
}

console.log(myCar);
*/
class Car {
    brand = 'Toyota';
    model = 'Corolla';
    year = 2024;
}
const myCar = new Car();
console.log(myCar);
export {};
/*
type myCarType = {
    brand: string;
    model: string;
    year: number;
}

const myCar: myCarType = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2024
}

console.log(myCar);
*/
/*
type myCarType = {
    brand: string;
    model: string;
    year: number;
}

class Car implements myCarType {
    brand =  'Toyota';
    model =  'Corolla';
    year = 2024
}

const myCar = new Car();
console.log(myCar);
*/
/*
interface myCarType {
    brand: string;
    model: string;
    year: number;
}

const myCar: myCarType = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2024
}

console.log(myCar);
*/
/*
interface myCarType {
    brand: string;
    model: string;
    year: number;
}

class Car implements myCarType {
    brand = 'Toyota';
    model = 'Corolla';
    year = 2024;
}

const myCar = new Car();

console.log(myCar);
*/
/*
const myCar = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2024
}

function displayDetails() {
    console.log(`Car: ${myCar.brand} ${myCar.model}, Year ${myCar.year}`);
    
}

console.log(myCar);
displayDetails();
*/
/*
const myCar = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2024,
    displayDetails: function() {
        console.log(`Car: ${this.brand} ${this.model}, Year ${this.year}`);
        
    }
}

console.log(myCar);
myCar.displayDetails();
*/
/*
const myCar = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2024,
    displayDetails() {              // Method
        console.log(`Car: ${this.brand} ${this.model}, Year ${this.year}`);
        
    }
}

console.log(myCar);
myCar.displayDetails();  // Output: Car: Toyota Corolla, Year 2024
*/ 

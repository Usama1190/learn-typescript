/* Object Oriented Programming with TypeScript

Tutorial in TypeScript official Documentation link in readme.md file.
The first link example here.

Classes

Syntax: first write the keyword class and then class name with first
letter capital. Then open the curly brackets and define the properties.
Properties are the variables that are used to store the data of the
class. */
// class Usama {};
// ______________________________________________________________________
// Class Members or properties
// 1. Fields
// class Point {
//     x: number;
//     y: number;
// }
// const pt = new Point();
// pt.x = 12;
// pt.y = 34;
// Another example
/*
class Point {
    x = 0;
    y = 0;
}

const pt = new Point();

// Using template literals
console.log(`${pt.x}, ${pt.y}`);   // Prints 0, 0
*/
/* Just like with const, let, and var, the initializer of a class
property will be used to infer its type:  */
// pt.x = '12';     // error
//Type 'string' is not assignable to type 'number'.ts(2322)
// --strictPropertyInitialization
// class BedGreeter {
// name: string;      // error
/* Property 'name' has no initializer and is not definitely
assigned in the constructor.ts(2564) */
// }
/*
class GoodGreeter {
    name: string;

    constructor() {
        this.name = 'Usama';
    }
};
*/
// OR definite assignment assertion operator  !:
/*
class GoodGreeter {
    name!: string;         // Not initialized but no error
}
*/
// 2. readonly
class Greeter {
    name = 'Usama';
    constructor(otherName) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    err() {
        // this.name = 'not ok';
        /* Cannot assign to 'name' because it is a read-only
        property.ts(2540) */
    }
}
const u = new Greeter();
console.log(u);
export {};
// ______________________________________________________________________

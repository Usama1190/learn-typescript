"use strict";
// Any
let myval;
myval = true; // ok
myval = 42; // ok
myval = 'hey!'; // ok
myval = []; // ok
myval = {}; // ok
myval = Math.random; // ok
myval = null; // ok 
myval = undefined; // ok
myval = () => { console.log("Hey again!"); }; // ok
let value;
value = true; // ok
value = 42; // ok
value = 'hey!'; // ok
value = []; // ok
value = {}; // ok
value = Math.random; // ok
value = null; // ok 
value = undefined; // ok
value = () => { console.log("Hey again!"); }; // ok
// Assigning a value of type unknown to variables of other types
let val;
const val1 = val; // Ok
const val2 = val; // Ok
// const val3: boolean = val;       // Will throw error
// const val4: number = val;        // Will throw error
// const val5: string = val;        // Will throw error
// const val6: Record<string, any> = val;       // Will throw error
// const val7: any[] = val;         // Will throw error
// const val8: (...args: any[]) => void = val;  // Will throw error
// Never
// Function returning never must not have a reachable end point
// function error(message: string): never {
//     throw new Error(message);
// }
// Inferred return type is never
function fail() {
    return Error('Something failed');
}

let myname: string | null;

myname = null;
console.log(myname);

myname = "usama";
console.log(myname);

// myname = undefined;         // Error
// myname = 12;                // Error


let myAge: string | number;

myAge = 16;          // narrowing
console.log(myAge);

// console.log(myAge.toLowerCase());       // Error

myAge = "Dont No";   // narrowing
console.log(myAge);

console.log(myAge.toString());       // common to both types can be called
//                                      even without narrowing

console.log(myAge.toLowerCase());    // can be called on string becaues of
//                                      narrowing


let newAge = Math.random() > 0.6 ? 'Usama' : 13;

// newAge.toLowerCase();  // Error : Transpiler cannot narrow

if(newAge === 'Usama') {
    // Type of newAge: string
    console.log(newAge.toLowerCase());        // Can be called
    
}

typeof newAge === 'string'
? newAge.toLowerCase()   // Ok string
: newAge.toFixed();      // Ok number


let age: number | 'died' | 'unknown';

age = 90;   // Ok
age = 'died';   // Ok
age = 'unknown'   // Ok
// age = 'living';   // Error


let usama: 'usama';

usama = 'usama';
// usama = 'khan';   // Error


let yourName = Math.random() > 0.6 ? 'Hira Khan' : undefined;

if(yourName) {
    yourName.toUpperCase();    // Ok: string
}

// yourName.toUpperCase();    // Error Object is possibly 'undefined'.

yourName?.toUpperCase();  // Ok


// You can also defined a type alias

type RawData = boolean | number | string | null | undefined;

let data: RawData;

// You can even combine them

type Id = number | string;

type IdMaybe = Id | undefined | null;
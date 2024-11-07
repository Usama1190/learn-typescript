/*  Tuple types have the advantage that you can accurately describe the type
of an array of mixed types  */
var tup = [3, 'usama'];
var tupSecondEle = tup[1]; // second element now has the type string
// console.log(tupSecondEle);
/* Typically an array contains zero to many objects of a single type. TypeScript
has special analysis around arrays which contain multiple types, and where
the order in which they are indexed is important */
/* these are called tuples. Think of them as a way to connect some data, but
with less syntax than keyed objects. */
// You can create a tuple using JavaScript's array syntax
var failingResponse = ['Not Found', 404];
console.log(failingResponse[1]);

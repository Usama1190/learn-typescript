"use strict";
// overloads give us type-checked calls
function add(arg1, arg2) {
    return arg1 + arg2;
}
// calling 'add' with any other parameter types would cause an error except 
//     for the three options.
console.log(add(1, 2));
console.log(add('Usama', 'Israr'));
console.log(add(true, false));

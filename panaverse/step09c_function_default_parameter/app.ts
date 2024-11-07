// Named function with optional and default parameters

// ( Note that the parameter type will be optional when used with default 
//    value )

function buildName(firstName: string, lastName = 'Khan'): string {
    if(lastName) 
        return firstName + ' ' + lastName;

    else 
        return firstName;
}


let result1 = buildName('Bob');     // work correctly because last parameter is optional.
// let result2 = buildName('Bob', 'Adam', 'Sr');     // error, too many parameters
let result3 = buildName('Bob', 'Adam');     // Ok



// anonymous function type with default parameters
// ( Note that the parameter type will be optional when used with default value )

let buildNam1: (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName = 'Khan'): string {
    if(lastName) 
        return firstName + ' ' + lastName;

    else 
        return firstName;
}
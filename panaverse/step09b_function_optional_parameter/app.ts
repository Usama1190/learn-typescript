// Named functions with optional parameters

function buildName(firstName: string, lastName?: string): string {
    if(lastName) 
        return firstName + ' ' + lastName;
    else 
        return firstName;
}


let result1 = buildName('Bob');   // Ok
// let result2 = buildName('Bob', 'John', 'Doe');   // error, too many parameters
let result3 = buildName('Bob', 'John');   // Ok


// anonymous function types with optional parameters

let buildName1: (firstName: string, lastName?: 'string') => string =
function(firstName: string, lastName?: string): string {
    if(lastName) 
        return firstName + ' ' + lastName;

    else 
        return firstName;
}
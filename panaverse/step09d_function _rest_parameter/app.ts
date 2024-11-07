// Named function with rest parameters

function buildName(firstName: string, ...restOfName: string[]): string {
    return firstName + ' ' + restOfName.join(' ');
}

let employeeName = buildName('Usama', 'Israr', 'Usman', 'Khan');

console.log(employeeName);


// anonymous function type with rest parameters

let buildNam1: (firstName: string, ...restOfName: string[]) => string =
function(firstName: string, ...restOfName: string[]): string {
    return firstName + ' ' + restOfName.join(' ');
}


// Note: Rest, optional and default parameters can only be at the end of the 
//       parameter list
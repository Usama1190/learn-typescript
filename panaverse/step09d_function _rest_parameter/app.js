// Named function with rest parameters
function buildName(firstName, ...restOfName) {
    return firstName + ' ' + restOfName.join(' ');
}
let employeeName = buildName('Usama', 'Israr', 'Usman', 'Khan');
console.log(employeeName);
export {};

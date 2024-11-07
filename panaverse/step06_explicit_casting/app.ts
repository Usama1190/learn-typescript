let myname: unknown = 'usama';

console.log((myname as string).length);
console.log((<string> myname).length);

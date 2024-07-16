// anonymous

let teacher: { name: string, exprience: number } = {
    name: 'Usama',
    exprience: 10
}


// Aliased Object Types

type Student = {
    name: string,
    age?: number
}

let student: Student = {
    name: 'Usama',
    age: 20
}

console.log(student['name']);
console.log(student.age);


// Interfaces

interface Manager {
    name: string,
    subordiates?: number
}

let storeManager: Manager = {
    name: 'Usama',
}
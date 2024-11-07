import inquirer from 'inquirer';
let answers = await inquirer.prompt([{
        name: 'age',
        type: 'number',
        message: 'Enter your age'
    }]);
console.log("Insha Allah, in " + (60 - answers.age) + " you will be 60 years old");

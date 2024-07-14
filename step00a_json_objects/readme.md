JSON ( JavaScript Object Notation )

1. JSON stands for JavaScript Object Notation.
2. JSON is a text-based data format that is used to store and transfer data.

// JSON syntax

{
    "name" : "Vipin",
    "age" : 21,
    "gender" : "male"
}

But wait, Is JSON is similer to JavaScript objects?

The Answer is No.

1. JavaScript objects can contain functions but JSON not.
2. JavaScript objects can only be used in JavaScript but JSON can be created and used in Other programming languages.





JSON Data

1. JSON data consists of key/value pairs similer to JavaScript object properties.
2. The key and values are written in double quotes and separated by a :
3. Example

// JSON data

"name": "Vipin"

4. JSON data requires double quotes for the key.





JSON Object

1. The JSON object is written inside curly braces {}.
2. JSON object can contains multiple key/values pairs.
3. Example

// JSON Object
{ "name": "Vipin", "age": 21 }





JSON Array

1. JSON array is written inside square brackets [].
2. Example :

// JSON array
[ "Vipin", "Ankit", "Raj" ]





Accessing JSON Data

1. We can access the JSON data using the dot notation.
2. Example :


// JSON object

const detail = { "name": "Vipin", "age": 21 }

// accessing JSON object

console.log(detail.name);           // Vipin
 

3. We can also use square bracket syntax [] to access JSON data.
4. Example : 

// JSON object

const detail = { 
    "name": "Vipin", 
    "age": 21 
}

// accessing JSON data

console.log(detail["age"]);        // 21





Use of JSON

1. JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vise-versa

2. JSON data are very easy to parse and use.

3. JSON is language independent (We can create and use JSON in other progamming languages too).


Examples of JSON.

1. package.json
2. tsconfig.json

Reference Twitter Post on JSON
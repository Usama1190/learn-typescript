// July 15, 2024





// q1 : Which of the following is a TypeScript feature

// a. Static Typing 🟢                    b. Dynamic Typing
// c. No Typing                            d. Weak Typing





// q2 : Which keyword is used to define an interface in TypeScript

// a. class         b. interface 🟢         c. type         d. struct





// q3 : Which of the following is the correct file extension for TypeScript 
//       files

// a. .ts 🟢           b. .js           c. .tsx           d. .java





// q4 : TypeScript is a superset of which language

// a. Python          b. Ruby          c. JavaScript 🟢        d. C++





// q5 : Which command is used to compile TypeScript code into JavaScript

// a. tsc  🟢        b. tscompile        c. node         d. tsbuild





// q6 : What is the primary purpose of TypeScript

// a. To add CSS to JavaScript       
// b. To provide a static Typing layer on the top of the JavaScript  🟢
// c. To improve HTML peformance
// d. To replace JavaScript





// q7 : 















// Topic 01 : JSON Objects


/* q1: What is JSON in the context of TypeScript?

A. JavaScript Object Notation, a data format for structuring data.   🟢
B. A TypeScript data type for creating classes.
C. A TypeScript keyword for defining variables.
D. A method in TypeScript for handling errors.  */





/* q2: How do you parse a JSON string into an object in TypeScript?

A. JSON.toObject(jsonString)
B. JSON.parse(jsonString)       🟢
C. JSON.stringify(jsonString)
D. JSON.convert(jsonString)    */





/* q3: How do you convert a TypeScript object into a JSON string?

A. JSON.parse(object)
B. JSON.toString(object)
C. JSON.stringify(object)   🟢
D. JSON.convert(object)        */





/* q4: Which of the following correctly declares a JSON object in TypeScript?

A. let person: JSON = { "name": "John", "age": 30 };
B. let person = { "name": "John", "age": 30 };        🟢
C. let person: JSON = "name: John, age: 30";
D. let person = JSON.parse({ "name": "John", "age": 30 }); */





/* q5: What will be the output of JSON.stringify({ name: "Alice", age: 25 }) 
in TypeScript?

A. { "name": "Alice", "age": 25 }
B. {"name":"Alice","age":25}      🟢
C. { name: Alice, age: 25 }
D. { 'name': 'Alice', 'age': 25 } */





/* q6: Which TypeScript type is most appropriate for a variable holding a 
        JSON object?

A. string
B. number
C. boolean
D. object 🟢      */





/* q7: How can you access the value of the "name" property in the following 
        JSON object: let user = { "name": "Jane", "age": 22 };?

A. user("name")
B. user.name     🟢
C. user->name
D. user[name]       */





/* q8: What is the purpose of the reviver function in JSON.parse method?

A. To modify the string before parsing.   
B. To replace undefined values.
C. To perform transformations on the resulting object.  🟢
D. To handle parsing errors. */





/* q9: Which of the following is true about JSON in TypeScript?

A. JSON supports comments.
B. JSON is a subset of JavaScript objects.
C. JSON can store functions.
D. JSON requires all keys to be double-quoted strings.  🟢   */





/* q10: How do you handle circular references in a TypeScript object when 
        converting to JSON?

A. JSON.stringify(object, (key, value) => value)   🟢
B. JSON.stringify(object, null, 2)
C. JSON.stringify(object, (key, value) => value === window ? 
        undefined : value)    🟢

D. JSON.stringify(object, null)  */





/* q11: What will JSON.parse('{"name": "Bob", "age": "30"}').age return 
        in TypeScript?

A. "30"       🟢
B. 30
C. undefined
D. null       */





/* q12: Which of the following methods can be used to safely access 
        deeply nested properties in a JSON object in TypeScript?

A. JSON.parse()      
B. JSON.stringify() 
C. Optional chaining (?.)   🟢
D. try-catch block   */





/* q13: In TypeScript, what will happen if you try to JSON.parse an 
invalid JSON string?

A. It will return null.
B. It will throw a SyntaxError.   🟢
C. It will return an empty object.
D. It will ignore the invalid parts and parse the rest. */





/* q14: Which of the following can be used to ensure a TypeScript object 
conforms to a specific shape when dealing with JSON?

A. Type Guards
B. Type Assertions  
C. Interfaces      🟢
D. Decorators */





/* q15: What does JSON.stringify({ a: undefined, b: null, c: 0 }) return?

A. {"a": undefined, "b": null, "c": 0}    
B. {"b": null, "c": 0}    🟢
C. {"a": null, "b": null, "c": 0}    
D. {"b": undefined, "c": 0} */





/* q16: How do you include only certain properties when converting an 
object to JSON in TypeScript?

A. Use a custom replacer function in JSON.stringify().  🟢
B. Use JSON.parse().
C. Use Object.keys().
D. Use Object.assign(). */





/* q17: What will JSON.parse('{ "x": 10, "x": 20 }') return in TypeScript?

A. { x: 10 }
B. { x: 20 }     🟢
C. { x: [10, 20] }
D. Throws an error */





/* q18: Which TypeScript feature allows you to define the expected 
structure of a JSON object?

A. Enums
B. Interfaces       🟢
C. Generics
D. Namespaces */





/* q19: How can you validate that a JSON object matches a specific 
TypeScript interface?

A. Using typeof
B. Using instanceof
C. Using custom validation logic   🟢
D. Using JSON.parse() */





/* q20: What is the result of JSON.stringify([undefined, function() {}, 
    Symbol("symbol")])?

A. [null, null, null]
B. []   
C. [undefined, null, null]
D. [null, null, null]   🟢   */


// ______________________________________________________________________


/* q1: What does JSON.parse('{"x":10,"y":20}') return in TypeScript?

A. { "x": "10", "y": "20" }
B. { x: 10, y: 20 }    🟢
C. {"x":10,"y":20}
D. { x: "10", y: "20" }  */





/* q2: How can you ensure a JSON object adheres to a specific shape in 
TypeScript?

A. By using a Class
B. By using Interfaces    🟢
C. By using Enums
D. By using Modules */





/* q3: Which method can you use to deeply clone a JSON object in 
TypeScript?

A. Object.assign()
B. JSON.parse(JSON.stringify(obj))     🟢
C. Object.create()
D. Array.from() */





/* q4: How do you handle JSON parsing errors in TypeScript?

A. Use try-catch block    🟢
B. Use if-else statement
C. Use switch statement
D. Use for loop */





/* q5: What will be the result of 
JSON.stringify({ x: NaN, y: Infinity })?

A. {"x":"NaN","y":"Infinity"}    
B. {"x":null,"y":null}      
C. {"x":0,"y":0}
D. {"x":null,"y":null} 🟢 */





/* q6: Which of the following is true about JSON.stringify()?

A. It can convert functions to JSON strings.
B. It can convert objects with circular references to JSON strings.  
C. It ignores functions and undefined properties.   🟢
D. It can parse JSON strings. */





/* q7: What is the output of JSON.parse('{}') in TypeScript?

A. undefined
B. null
C. {}   🟢
D. [] */





/* q8: How do you convert a Date object to a JSON string in TypeScript?

A. JSON.stringify(new Date())     🟢
B. JSON.parse(new Date())
C. Date.toJSON()    
D. Date.stringify() */





/* q9: What happens when you pass an array with undefined values to 
JSON.stringify()?

A. The undefined values are converted to null.   🟢
B. The undefined values are removed.
C. The undefined values are converted to 0.
D. The undefined values are converted to empty strings.   */
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

A. JSON.parse()      🟢
B. JSON.stringify() 
C. Optional chaining (?.)
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
B. Type Assertions  🟢
C. Interfaces
D. Decorators */





/* q15: What does JSON.stringify({ a: undefined, b: null, c: 0 }) return?

A. {"a": undefined, "b": null, "c": 0}    🟢
B. {"b": null, "c": 0}
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
B. []   🟢
C. [undefined, null, null]
D. [null, null, null] */
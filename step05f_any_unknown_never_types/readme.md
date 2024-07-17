Any and Unknown Types

Any Type

What is the "unknown" Type in TypeScript

Never Type

The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. Variables also require the type never when narrowed by any type guards that can nerver be true.

The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to never (except nerver itself). Even any isn't assignable to never.
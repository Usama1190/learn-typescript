// These two interfaces are completely transferrable in a structural type
// system:

interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}

let ball: Ball = { diameter: 10 }
let sphere: Sphere = { diameter: 20 }

sphere = ball;
ball = sphere;


// If we add in a type which structurally contains all of the members of Ball
// and Sphere, then it also can be set to be a ball or sphere


interface Tube {
    diameter: number;
    length: number;
}

let tube: Tube = { diameter: 12, length: 3 }

// tube = ball;     // Error

ball = tube;


// because a ball does not have a length, then it cannot be assigned to the
// tube variable. However, all the members of Ball are inside tube, and so 
// it can be assigned


// TypeScript is comparing each member in the type against each other to 
// verify their equality.


// ========================================================================
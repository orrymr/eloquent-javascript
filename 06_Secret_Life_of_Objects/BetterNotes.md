# Abstract Data Type / Object Class - something that contains some code, but exposes a limited set of methods/properties.

- methods: properties that hold function values.

```javascript
let whiteRabbit = {type: "white", speak};
```
# Methods

Where `speak` is a function.
So, `speak` is a method of `whiteRabbit`.

Now, if you want to created `blackRabbit`

```javascript
let blackRabbit = {type: "black", speak};
```

`this` behaves differently when defined with an arrow function, `=>` or a `function` keyword.
In JavaScript, regular functions defined with the function keyword have their own this binding determined by how they are called, so they cannot directly access the this of their surrounding scope, unlike arrow functions which inherit it.

# Prototypes

Now, if you have many more methods than `speak`, than creating new objects this way is a freaking mission.

Better if we can keep methods in a single place, rather than add to eah object individually.

Enter, _prototypes_.

Plain old objects created with {} notation are linked to an object called Object.prototype.

```javascript
let empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]
```

Functions derive from `Function.prototype` and arrays derive from `Array.prototype`

```javascript
console.log(Object.getPrototypeOf(Math.max) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// → true
```


One must create the prototypical rabbit, say a protoRabbit, from whence all other rabbits are created.
All rabbits are created in the image of the protoRabbit.

Enter, the `protoRabbit`:

```javascript
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
```

So, we have a prototypical rabbit that has a speak method (yes, method, since speak is an object property which is holding a function value).

Now, we need to create `blackRabbit` using this prototype. So, `Object.create()` allows you to create a new object from a prototype:

```javascript
let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";
blackRabbit.speak("I am fear and darkness");
// → The black rabbit says 'I am fear and darkness'
```
# Classes

A class defines the shape of a type of object—what methods and properties it has.

- class keyword
- constructor

class was only introduced in 2015 JS.

## Functions: Prototype Property vs Actual Prototype.

In JavaScript, there’s a clear distinction between a function’s prototype property and its actual prototype (the object it inherits from)

```javascript
function yes() {
  console.log("yes");
}

console.log(yes.prototype);
// {}
console.log(Object.getPrototypeOf(yes));
// [Function (anonymous)] Object
```

Now, this is important for inheritance.
A constructor is just a function. So, it has a prototype property. This prototype property is not the prototype of the constructor function itself—it’s the object that will serve as the prototype for instances created by the constructor.
The constructor function’s prototype property holds the prototype used for instances created through it.

## Example of class, prototype thing

```javascript
class Particle {
  speed = 0;
  constructor(position) {
    this.position = position;
  }
}

let a = new Particle("(1, 2)");
console.log(typeof Particle); // function
console.log(Object.getPrototypeOf(Particle) == Function.prototype); // true
```

Particle is the constructor. In JavaScript, a class declaration creates a constructor function under the hood. The class Particle syntax is syntactic sugar for defining a constructor function and its associated prototype.
`speed` and `position` are both instance properties, but they differ in how they are defined and initialized in the class.
I don't understand the distinction.

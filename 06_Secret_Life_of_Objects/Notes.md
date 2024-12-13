- interface of an object
- encapsulation
- methods: properties that hold function values
- discussion on `this` as a keyword
- can pass it in explicitly, if you use a function's `call()` method

```javascript
function speak(){
    console.log(`Woof woo.. ${this.thing}`);
}

let a = {thing: "an og", speak};
a.speak();
speak.call(a);
```

- Key point: only arrow functions can reference the `this` of their wrapping scope!

## Prototypes


Objects can be linked to other objects to get properties of original object. \

- Simple objects like `let empty = {}` are magically linked to Object.prototype
- So they get the toString() method from it for free.

```javascript
let empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]
```

So, think of like a hierarchy of prototypes. If you try to get a property from an object, and it doesn't have that property, the prototype of that object is searched, then its prototype until you get to one such object without a prototype. Object.prototype is ONE such object.

```javascript
console.log(Object.getPrototypeOf({}) == Object.prototype);
```

Many objects don’t directly have Object.prototype as their prototype but instead have another object that provides a different set of default properties. Functions derive from Function.prototype and arrays derive from Array.prototype.

You can use Object.create to create an object with a specific prototype.

```javascript
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let blackRabbit = Object.create(protoRabbit);
console.log(Object.getPrototypeOf(blackRabbit)); //{ speak: [Function: speak] }

blackRabbit.type = "black";
blackRabbit.speak("I am fear and darkness");
// → The black rabbit says 'I am fear and darkness'
```

NNB: The above is the big idea. You create an object, protoRabbit. From that, using Object.create, you create an object with protoRabbit as its prototype; so in this case blackRabbit has a speak method. So, this is like a poor man's classes. 




## Classes

Can also use class notation to define the shape of a type of object.


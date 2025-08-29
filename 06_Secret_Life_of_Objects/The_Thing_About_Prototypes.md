First thing to understand is that any function can be used as a constructor in Javascript.
The convention is to use upper-case constructors, however.

```javascript
function Dog(){
    console.log("woof");
}

let fluffy = new Dog(); // Logs "woof" and creates a new object

console.log(fluffy instanceof Dog); // true
```

Using the new keyword creates an instance of `Dog`.
What does "instance of" mean? 
Every function in Javascript, (including a constructor, which is just a function - `Dog` in our case) has a prototype _property_:

```javascript
console.log(Dog.prototype); // this just outputs "{}" <- an empty object
```

Using the `new` keyword takes this prototype property (Dog.prototype) and sets it as the prototype of the new object (fluffy) that has been created:

```javascript
console.log(Object.getPrototypeOf(fluffy) === Dog.prototype); // true
```


Right now, the `Dog` function's prototype property is empty, recall:
```javascript
console.log(Dog.prototype); // this just outputs "{}" <- an empty object
```

But I can add stuff to it, if I want:

```javascript
function Dog(){
    console.log("woof");
}

let fluffy = new Dog(); // Logs "woof" and creates a new object
Dog.prototype.numberOfFeet = 4;

console.log(Dog.prototype); // this now outputs "{ numberOfFeet: 4 }", even though I added it afterwards
```

# Think about it this way.

```javascript
function Dog(){
}

let fluffy = new Dog(); // fluffy has internal [[Prototype]] set to Dog.prototype.
console.log(Object.getPrototypeOf(fluffy) == Dog.prototype); // true
```

# Array.prototype, Object.prototype

This is why:

```javascript
let a = {};
let b = [];

console.log(Object.getPrototypeOf(a) == Object.prototype); // true
console.log(Object.getPrototypeOf(b) == Array.prototype);  // true
```

```javascript
let c = new Object();
let d = new Array();

console.log(Object.getPrototypeOf(c) == Object.prototype); // true
console.log(Object.getPrototypeOf(d) == Array.prototype);  // true
```

# Doing Crazy shit

```javascript
Object.prototype.orry = () => console.log("hi orry");
console.log(Object.prototype); // [Object: null prototype] { orry: [Function (anonymous)] }
let obj = {};
obj.orry(); // hi orry
```

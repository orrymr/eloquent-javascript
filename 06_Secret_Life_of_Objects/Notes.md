I Speed read through this chapter, so need to read it again properly, one day.

- discussion on `this` as a keyword
- can pass it in explicitly, if you use a function's `call()` method

## Prototypes

Objects can be linked to other objects to get properties of original object. \

- Object.prototype.
- Simple objects like `let empty = {}` are magically linked to Object.prototype
- So they get the tostring method from it for free.

So, think of like a hierarchy of prototypes. If you try to get a property from an object, and it doesn't have that property, the prototype of that object is searched, then its prototype until you get to one such object without a prototype. Object.prototype is ONE such object.

```javascript
console.log(Object.getPrototypeOf({}) == Object.prototype);
```

Many objects don’t directly have Object.prototype as their prototype but instead have another object that provides a different set of default properties. Functions derive from Function.prototype and arrays derive from Array.prototype.

You can use Object.create to create an object with a specific prototype.


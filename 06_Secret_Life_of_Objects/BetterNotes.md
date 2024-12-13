Abstract Data Type / Object Class - something that contains some code, but exposes a limited set of methods/properties.

- methods: properties that hold function values.

```javascript
let whiteRabbit = {type: "white", speak};
```

Where `speak` is a function.
So, `speak` is a method of `whiteRabbit`.

Now, if you want to created `blackRabbit`

```javascript
let blackRabbit = {type: "black", speak};
```

Now, if you have many more methods than `speak`, than creating new objects this way is a freaking mission.

Better if we can keep methods in a single place, rather than add to eah object individually.

Enter, _prototypes_.

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

The protoRabbit is useful for defining properties for which all instances of that class share the same value.
For example, all rabbits share the same speak method.
But, their type property differs.

This way of using prototypes is one way of defining common functionality.
Thing is, all rabbits need to also have a `type` property, right?
If you just forget to go `blackRabbit.type="black"`, then your blackRabbit won't have that property, and it could break code, down the line.

So, that's what you can use a `constructor` for: 

```javascript
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
```

In other words, the constructor makes sure that you:
1. derive the new object from the correct prototype
2. have the correct properties that instances of this class supposed to have (in this case, type)

This is kind of a clunky thing to remember to do.
So, JavaScript provides the `class` keyword.

EG:

```javascript
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
```

This code creates a binding called `Rabbit`. It holds:
1. a function that runs the code in the constructor
2. a prototype property that holds the `speak` method

Woah, wtf does point 2 mean?
Well, if you look at the Rabbit binding, it will have a `prototype` property. That `prototype` property will have
a speak method:

```javascript
console.log(Rabbit.prototype.speak); // [Function: speak]
console.log(Rabbit.prototype.speak()); // The undefined rabbit says 'undefined'
```

Interestingly, the `class` keyword was only introduced in 2015 Javascript. Prior to this, you'd just create the
constructor manually.

Now, watch how when you call the constructor, you have to specify the non-shared properties of the new instance:

```javascript
let killerRabbit = new Rabbit("killer");
```

Rabbit.prototype property holds the prototype used for creating new instances.
However, the prototype of the actual constructor is a Function.prototype:

```javascript
console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// → true
console.log(Object.getPrototypeOf(killerRabbit) == Rabbit.prototype);
// → true
```

NB: you can only call the constructor by using the `new` keyword.

So, `Rabbit()` itself is the actual constructor.

```javascript
> Rabbit()
Uncaught TypeError: Class constructor Rabbit cannot be invoked without 'new'
> new Rabbit("fluffy")
Rabbit { type: 'fluffy' }
```

It is also possible to declare properties directly in the class declaration. 
NB: Unlike methods, such properties are added to instance objects and not the prototype.

```
class Rabbit {
    speed = 0;
	constructor(type) {
		this.type = type;
	}
	speak(line) {
		console.log(`The ${this.type} rabbit says '${line}'`);
	}
}
```

then 

```javascript
let whiteRabbit = new Rabbit("white");
> whiteRabbit
Rabbit { speed: 50, type: 'white' }
```

Note how you don't see the speak property on whiteRabbit. That's because it's a method which is added to the prototype.

```javascript
Object.getPrototypeOf(whiteRabbit) == Rabbit.prototype;
```

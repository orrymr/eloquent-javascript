## Function return values

A return keyword without an expression after it will cause the function to return undefined. \
Functions that don’t have a return statement at all, such as makeNoise, similarly return undefined. \ 

## Bindings and scopes

For bindings defined outside of any function, block, or module (see Chapter 10), the scope is the whole program—you can refer to such bindings wherever you want. These are called global. \
Inside -> local scope. \

__NNB: In pre-2015 JavaScript, only functions created new scopes, so old-style bindings, created with the var keyword, are visible throughout the whole function in which they appear—or throughout the global scope, if they are not in a function.__
\

```javascript
let x = 10;   // global
if (true) {
  let y = 20; // local to block
  var z = 30; // also global
}
```
\
__READ AGAIN__: In pre-2015 JS, only functions created new scopes. That's why var (which is a pre 2015 construct) creates global scoped variables (or in nearest local scope) even in a local if block.
\

## Lexical Scoping

Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called lexical scoping. \
This is unlike `q`, where you had to pass the variable into the inner function, because `q` does not have lexical scoping.

## Declaration Notation

```javascript
function square(x) {
  return x * x;
}
```

In this form, the following code works:


```javascript
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
```

Crazy, huh? Even though function was declared before.

## Arrow functions

```javascript
const square = (x) => x*x;
```

## Call stack

Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution.

## Optional Arguments

```javascript
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16
```

JavaScript is extremely broad-minded about the number of arguments you can pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters are assigned the value undefined.

### default param

```javascript
function roundTo(n, step = 1) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(4.5));
// → 5
console.log(roundTo(4.5, 2));
// → 4
```

## Closures

This feature—being able to reference a specific instance of a local binding in an enclosing scope—is called closure. \
A function that references bindings from local scopes around it is called a closure. \
\
Thinking about programs like this takes some practice. A good mental model is to think of function values as containing both the code in their body and the environment in which they are created. When called, the function body sees the environment in which it was created, not the environment in which it is called.

```javascript
function multByVal(val){
    return (otherNum) => val * otherNum;
}

multBy2 = multByVal(2);
console.log(multBy2(5));
```

Closures are weird.

## Recursion

Running through a simple loop is generally cheaper than calling a function multiple times. \
The dilemma of speed versus elegance is an interesting one. \
Recursion is not always just an inefficient alternative to looping. Some problems really are easier to solve with recursion than with loops. \

## Functions and side effects

A pure function is a specific kind of value-producing function that not only has no side effects but also doesn’t rely on side effects from other code—for example, it doesn’t read global bindings whose value might change. \
A pure function has the pleasant property that, when called with the same arguments, it always produces the same value (and doesn’t do anything else). \

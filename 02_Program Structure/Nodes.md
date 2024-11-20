A fragment of code that produces a value is called an expression. Every value that is written literally (such as 22 or "psychoanalysis") is an expression.
_Statement_ is comprised of one or more _expressions_. \
Recommendation to use semicolons at the end of statements (sometimes if you don't the two statements can join. Rules are complex).\

To catch and hold values, JavaScript uses _bindings_.


## Bindings

Imagine bindings as tentacles, rather than boxes. They don't contain values, they grasp them.
Two bindings can refer to the same value.

Use `let` to bind:

```javascript
let foo = 5;
```

When you define a binding without giving it a value, the tentacle has nothing to grasp, so it ends in thin air. If you ask for the value of an empty binding, you’ll get the value undefined.

```javascript
let bar; //bar is undefined
```

`var` and `const` can also be used to create bindings. \
`var` is the way bindings were declared in pre-2015 Javascript. It does differ from `let`, but that's discussed in a later chapter. \
`const` is of course for constants. \
\

## The Environment

The collection of bindings and their values that exist at a given time is called the environment.
When a program starts up, this environment is not empty. It always contains bindings that are part of the language standard, and most of the time, it also has bindings that provide ways to interact with the surrounding system. For example, in a browser, there are functions to interact with the currently loaded website and to read mouse and keyboard input.

When a program starts, there are some bindings already in the environment by default. \
Many of these bindings have the type _function_. \
Example: `prompt("Enter something");` - prompt is built in. \
\
Using prompt (usually you wouldn't though, because you have no control over what the prompt box looks like. But useful for toy examples):

```javascript
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}
```

## console.log

Most JavaScript systems (including all modern web browsers and Node.js) provide a console.log function that writes out its arguments to some text output device.

## Side Effects

Showing a dialog box or writing text to the screen is a side effect. Many functions are useful because of the side effects they produce. 

Functions may also produce values, in which case they don’t need to have a side effect to be useful. For example, the function Math.max takes any amount of number arguments and gives back the greatest.

## Converting values between types

```javascript
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " +
            theNumber * theNumber);
```

The function Number converts a value to a number. We need that conversion because the result of prompt is a string value, and we want a number. There are similar functions called String and Boolean that convert values to those types.

## Branching

## Number.isNaN()

Will only return true if the parameter is NaN:

```bash
> Number.isNaN("asd")
false
> Number.isNaN(1234)
false
> Number.isNaN(Number(1234))
false
> Number.isNaN(Number("1234"))
false
> Number.isNaN(Number("1234qf"))
true
```

## Looping

## Case

usually use camelCase.
Marking a function as a constructor, capitalize it.
Like the Number() function.

# New Terms:

- expression
- statement
- javascript environment
- bindings
- side effects
- return values

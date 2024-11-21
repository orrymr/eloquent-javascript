Values - chunks of bits that represent pieces of information. 
Types - Every value has a type that determines its role (numbers, strings, Booleans, and undefined values)
Operators - doing things with these values. Like multiplying them (if their type is number)

# Numbers

- Javascript uses 64 bits to store a number.
- Precedence rules for mathematical operations
- Special values: `Infinity`, `-Infinity` `NaN`

# Strings

```javascript
`Down on the sea`
"Lie on the ocean"
'Float on the ocean'
```

Javascript uses Unicode: assign a number to ån¥ chåraçter you might need. \
Problem is, Javascript uses 16 bits per string element (character), but Unicode has about 2^32 characters. \
So, some characters (like emojis), take 2 "character positions".

## Concatenate strings

```javascript
"con" + "cat" + "e" + "nate"
```

## Template Literals

Backtick quotes strings.\
```javascript
`half of 100 is ${100 / 2}`
```

# Unary operators

Operators like +, *, - are single character symbols. Not all operators are symbols. \
`typeof` One example is the typeof operator, which produces a string value naming the type of the value you give it.

```javascript
console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string
```
# Boolean

String comparison:
```javascript
console.log("Aardvark" < "Zoroaster")
// → true
```

Only one number that's not equal to itself:

```javascript
console.log(NaN == NaN)
// → false
```

# Logical operators

`&& ||`

# Empty Values

2 of them

- null
- undefined

The difference in meaning between undefined and null is an accident of JavaScript’s design, and it doesn’t matter most of the time.
\
When `null` or `undefined` occurs on either side of the operator, it produces true only if both sides are one of null or undefined.

``` javascript
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
```

# Automatic type conversion: type coercion

```javascript
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true
```

Javascript will under the hood convert the values so that it makes sense: This is called _type coercion_.\

## Testing for equality with type coercion

When you do not want any type conversions to happen, there are two additional operators: === and !==. \

## Short-circuiting of logical operators

``` javascript
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
```

NB: The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string ("") count as false, while all the other values count as true. That means 0 || -1 produces -1, and "" || "!?" yields "!?".

short-circuit evaluation:  In the case of true || X, no matter what X is—even if it’s a piece of program that does something terrible—the result will be true, and X is never evaluated. The same goes for false && X, which is false and will ignore X.

The ?? operator resembles || but returns the value on the right only if the one on the left is null or undefined, not if it is some other value that can be converted to false. Often, this is preferable to the behavior of ||.

```javascript
console.log(0 || 100);
// → 100
console.log(0 ?? 100);
// → 0
console.log(null ?? 100);
// → 100
```

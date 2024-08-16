# Numbers

Javascript uses 64 bits to store a number.

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

# Empty Values

2 of them

- null
- undefined

The difference in meaning between undefined and null is an accident of JavaScript’s design, and it doesn’t matter most of the time.

# Automatic type conversion

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
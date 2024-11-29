# Abstraction

Gives the ability to reason over something without getting bogged down in the detail.

# Abstracting repetition

Instead of re-implementing this pattern:

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

We can encapsulate that in a function

```javascript
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
```

But it still just does one thing - namely, logs `i`.

so, pass in the function:

```javascript
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
// → 0
// → 1
// → 2
```

Can also just pass in an anonymous function on the spot.

# Higher-order functions

Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
EG:

```javascript
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```

## forEach

["A", "B"].forEach(l => console.log(l));

## Creating a filter function

```javascript
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));
```
This function is pure. It does not modify the array it is given.

Unlike this this impure thing:

```javascript
function impure(arr){
    arr.pop();
}

let foo = [1, 2, 3];

impure(foo);
console.log(foo); // [ 1, 2 ]
```

You don't actually need to define the filter() method above; it's built into arrays.

```javascript
let a = [1, 2, 3, 4]
a.filter((x) => x % 2 == 0)
// [ 2, 4 ]
```

## map

```javascript
a.map((x) => x*2) // [2, 4, 6, 8]
// pure, doesn't change a
```

## reduce

```javascript
a.reduce((x, y) => x + y)
```

## Speed

The less abstract style (for loop) is faster (why?)

## some

_Statement_ is comprised of one or more _expressions_. \
Recommendation to use semicolons at the end of statements (sometimes if you don't the two statements can join. Rules are complex).\


## Bindings

Use `let` to bind:

```javascript
let foo = 5;
```

`var` and `const` can also be used to create bindings. \
`var` is the way bindings were declared in pre-2015 Javascript. It does differ from `let`, but that's discussed in a later chapter. \
`const` is of course for constants. \
\

## The Environment

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

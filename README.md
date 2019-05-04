### Higher Order Functions

A higher order function has two qualifiers:

* Functions that take in other functions as arguments
* Functions that return other functions

Map function takes in a `transformer` function as an argument.
```js
function map(array, transformer) {
  let items = [];

  for(let i = 0, { length } = array; i < length; i++) {
    const item = transformer(array[i], i);
    items.push(item);
  }
  
  return items;
}
```

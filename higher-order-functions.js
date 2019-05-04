function map(array, transformer) {
  let items = [];

  for(let i = 0, { length } = array; i < length; i++) {
    const item = transformer(array[i], i);
    items.push(item);
  }
  
  return items;
}

function getFirstLetter(str) {
  return str.split('')[0];
}

console.log(map(['Dan', 'Seyi', 'Cassie'], getFirstLetter))


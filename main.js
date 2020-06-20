//map - function that takes an array of items and a function that returns an array with each item manipulated by that function.
console.log("E1. Map");
let products = [
  {name: "Turnip", type: "Vegetable"},
  {name: "Coconuts", type: "Fruits"},
  {name: "Turkey", type: "Meat"}
];
console.log(products);

function getFullItem(item) {
  var fullItem = [item.name,item.type].join(" ");
  return fullItem;
}
console.log(products.map(getFullItem));

const map = (array, fn) => {
  const newArray = [];
  for (i = 0; i < array.length; i ++) {
    newArray.push(fn(array[i]));
  }
  return newArray;
}
console.log(map(products, getFullItem));

// reduce - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
console.log("E2. Reduce");
let orders = [75, 25, 50];
console.log(orders);

function getTotalOrder(total, num) {
  return total + num;
}
console.log(orders.reduce(getTotalOrder));


const reduce = (arrayOr, fun) => {
  let currentValue = 0;
  for ( i = 0; i < arrayOr.length; i++){
    currentValue = fun(currentValue, arrayOr[i]);
  }
  return currentValue;
}
console.log(reduce(orders, getTotalOrder));


//filter - funciton that takes an array and a funcion that returns an array with only the items that return true in the function.
console.log("E3. Filter");

let fruits = ['beet', 'green Chili', 'tomatoes', 'celery', 'red pepper', 'potatoes'];
console.log(fruits);

function filterItems(query) {
  return fruits.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
   })
}
console.log(filterItems('es'));

function search(item, query) {
  if (item.includes(query)) {
    return true;
  }
  return false;
}

const filter = (array, fun, query) => {
  const newArray = [];
  for ( i = 0; i < array.length; i++){
    if (fun(array[i], query)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(filter(fruits, search, 'es'));


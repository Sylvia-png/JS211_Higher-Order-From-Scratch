//map - function that takes an array of items and a function that returns an array with each item manipulated by that function.
console.log("E1. Map");
let products = [
  {name: "Turnip", type: "Vegetable"},
  {name: "Coconuts", type: "Fruits"},
  {name: "Turkey", type: "Meat"}
];

function getFullItem(item) {
  var fullItem = [item.name,item.type].join(" ");
  return fullItem;
}
console.log(products);
console.log(products.map(getFullItem));

// reduce - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
console.log("E2. Reduce");

let orders = [75, 25, 50];

function getTotalOrder(total, num) {
  return total + num;
}

console.log(orders);
console.log(orders.reduce(getTotalOrder));


// filter - funciton that takes an array and a funcion that returns an array with only the items that return true in the function.
console.log("E3. Filter");

let fruits = ['beet', 'green Chili', 'tomatoes', 'celery', 'red pepper', 'potatoes'];

function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
console.log(fruits);
console.log(filterItems('es'));
console.log(filterItems('ee'));
console.log(filterItems('er'));

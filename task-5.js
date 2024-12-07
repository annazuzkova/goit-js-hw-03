const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let allProp = [];
  for (const product of arr) {
    const arrayOfObject = Object.entries(product);
    for (const element of arrayOfObject) {
      if (element[0] === prop) {
        allProp.push(element[1]);
      }
    }
  }
  return allProp;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []

for (const product of products) {
  const { name, price, quantity } = product;
}

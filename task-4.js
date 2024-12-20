const countTotalSalary = function (employees) {
  const salaryArray = Object.values(employees);
  let sumOfSalary = 0;
  for (const salary of salaryArray) {
    sumOfSalary = sumOfSalary + salary;
  }
  return sumOfSalary;
};
/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400

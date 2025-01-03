// const findBestEmployee = function (employees) {
//   const employeesArray = Object.entries(employees);
//   console.log(employeesArray);
//   let bestResalt = 0;
//   let bestEmployee = "";
//   for (const employee of employeesArray) {
//     // console.log(employee[1]);
//     if (employee[1] > bestResalt) {
//       bestResalt = employee[1];
//       bestEmployee = employee[0];
//     }
//   }
//   return bestEmployee;
// };
const findBestEmployee = function (employees) {
  let bestEmployee = "";
  let maxTasks = 0;

  for (let [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }
  return bestEmployee;
};
/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

function coffeeCalculations(coffeeArray) {
  let sumOfCoffee = coffeeArray.reduce(
    (totalCoffee, numberOfCoffees) => (totalCoffee += numberOfCoffees)
  );
  return `The total bill is $${sumOfCoffee * 1.25}`;
}

console.log(coffeeCalculations([6, 3, 9, 4, 2]));

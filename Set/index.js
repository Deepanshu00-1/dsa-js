const set = new Set();

set.add(10)
set.add(20)
set.add(30)
set.delete(20)
console.log(set.size)
console.log(set)

const numbers = [1, 2, 3, 4, 4, 5, 6, 3]
let uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers)

uniqueNumbers.forEach(uniqueNumber => console.log(uniqueNumber))

uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers)
const set = new Set();
console.log(set)

set.add(1)
set.add(2)
set.add(1)
console.log(set)

set.add(3)
set.delete(1)

console.log(set)

const numbers = [1, 1, 2, 2, 3, 3, 4]

const uniqueNumbers = new Set(numbers)
console.log(uniqueNumbers)

let uniqueNumbersArray = [...uniqueNumbers]
console.log(uniqueNumbersArray)
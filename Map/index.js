const users = new Map();

users.set(101, "Erik")
users.set(102, "Elsa")
users.set(103, "Daniel")
users.set("Lay", 104)

console.log(users)

users.set(101, "Nik")
console.log(users)

console.log(users.get(101))
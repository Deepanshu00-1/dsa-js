const students = ["Rohan", "Daniel", "Erik", "Rohan", "Daniel"]

const map = new Map()

for(let i=0; i<students.length; i++){
    map.set(i, students[i])
}

console.log(map)

console.log(map.keys())
console.log(map.values())
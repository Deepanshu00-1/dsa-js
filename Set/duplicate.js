// find duplicate

const students = ["Alex", "Erik", "Loki", "Erik"];

const seen = new Set()

for(const student of students){
    if(seen.has(student)){
        console.log("Duplicate: ", student)
        break;
    }
    seen.add(student)
}
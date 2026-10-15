const students = ['erik', 'eren', 'daniel', 'john', 'michael']

function findStudent(allStudents, studentName){
    for(let i=0; i<allStudents.length; i++){
        if(allStudents[i] === studentName){
            console.log('Found it: ', studentName)
        }
        return
    }
}

findStudent(students ,"michael")
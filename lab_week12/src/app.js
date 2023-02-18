function selectLog() {
const divlightTheme = document.querySelector('.container light-theme')
console.log(divlightTheme)
}

const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]
  
function studentsSelection (students)  {
  const studentsScholarship = []
  for (const average of students) {
    studentcalculate(average,studentsScholarship)
    
  }
  return studentsScholarship
}
  
function studentcalculate (average,studentsScholarship) {
     let gradeTotal = 0
     for (const number of average.grades) {
       gradeTotal += number
     }
     const gradeAverage = gradeTotal / average.grades.length
     if (gradeAverage > 80) {
      const scholarshipStudent = { name: average.name, gradeAvg: gradeAverage}
      studentsScholarship.push(scholarshipStudent)
     }
  
  return gradeTotal
}

console.log(studentsSelection (students))


function applydarkmode(){
    const dark_mode = document.querySelector('.light-theme')
    dark_mode.classList.add('dark-theme')
}
applydarkmode()
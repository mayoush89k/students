let students = [
  {
    id: 1,
    name: "John Doe",
    age: 22,
    courses: [
      {
        code: "CS101",
        name: "Introduction to Programming",
        grades: [85, 90, 78],
      },
      { code: "CS102", name: "Advanced Programming", grades: [80, 88] },
      { code: "MATH101", name: "Calculus I", grades: [90, 92, 88] },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 20,
    courses: [
      {
        code: "CS101",
        name: "Introduction to Programming",
        grades: [78, 80, 85],
      },
      { code: "PHYS101", name: "Mechanics", grades: [70, 65, 80] },
    ],
  },
  {
    id: 3,
    name: "Alan Turing",
    age: 23,
    courses: [
      { code: "CS102", name: "Advanced Programming", grades: [92, 90] },
      {
        code: "CS103",
        name: "Algorithms & Data Structures",
        grades: [95, 90, 89],
      },
      { code: "MATH101", name: "Calculus I", grades: [88, 90, 85] },
    ],
  },
  {
    id: 4,
    name: "Ada Lovelace",
    age: 24,
    courses: [
      {
        code: "CS101",
        name: "Introduction to Programming",
        grades: [85, 87, 90],
      },
      { code: "CS104", name: "Machine Learning", grades: [91, 88] },
    ],
  },
  {
    id: 5,
    name: "Grace Hopper",
    age: 22,
    courses: [
      { code: "CS105", name: "Compilers", grades: [89, 92, 95] },
      { code: "MATH102", name: "Calculus II", grades: [85, 88, 87] },
    ],
  },
  {
    id: 6,
    name: "Katherine Johnson",
    age: 20,
    courses: [
      { code: "MATH102", name: "Calculus II", grades: [90, 92, 95] },
      { code: "PHYS102", name: "Electromagnetism", grades: [88, 89] },
    ],
  },
  {
    id: 7,
    name: "Margaret Hamilton",
    age: 23,
    courses: [
      { code: "CS105", name: "Compilers", grades: [85, 86, 87] },
      { code: "CS102", name: "Advanced Programming", grades: [92, 91] },
    ],
  },
];

const getStudent = (studentId) =>
  students.find((student) => studentId == student.id);

// List All Students: Create a function listStudents() that displays the
// names of all students.
function listStudents(students) {
  return students.map((student) => {
    return student.name;
  });
}
// console.log(listStudents(students));

// ● Find Students by Course: Create a function
// studentsInCourse(courseCode) that lists all students enrolled in a
// specific course.
function studentsInCourse(students, courseCode) {
  return students.filter((student) => {
    return student.courses.some((course) => course.code == courseCode);
  });
}
// console.log(studentsInCourse(students,"CS105"));

// ● Average Grade for a Student: Create a function
// averageGrade(studentId, courseCode) that calculates the average
// grade of a specific student in a specific course.
function averageGrade(studentId, courseCode) {
  const student = getStudent(studentId);
  const course = student.courses.find((course) => courseCode == course.code);
  let sum = course.grades.reduce((acc, currentGrade) => (acc += currentGrade));
  return (sum / course.grades.length).toFixed(2);
}

// console.log(averageGrade(1 , "CS101"));

// ● Add a New Course for a Student: Create a function
// addCourse(studentId, courseCode, courseName) that adds a new
// course (without grades) for a specific student.
function addCourse(studentId, courseCode, courseName) {
  const currentStudent = getStudent(studentId);
  currentStudent.courses.push({
    code: courseCode,
    name: courseName,
  });
}
// addCourse(1, 'PHYS101', 'Mechanics')

// ● Add a Grade to a Course: Create a function addGrade(studentId,
// courseCode, grade) that adds a grade to a specific course of a specific
// student..
function addGrade(studentId, courseCode, grade) {
  const currentCourse = getStudent(studentId).courses.find(
    (course) => course.code == courseCode
  );
  currentCourse.grades.push(grade);
  console.log(getStudent(studentId));
}

// addGrade(2,'CS101',75)

// ● Remove a Student: Create a function removeStudent(studentId)
// that removes a student using their ID.
function removeStudent(studentId) {
  const index = students.findIndex((student) => student.id == studentId);
  students.splice(index, 1);
  console.log(students);
}
// removeStudent(3)

// ● Find All Students Older Than: Create a function
// studentsOlderThan(age) that lists all students older than a specified
// age.
function studentsOlderThan(age) {
  return students.filter((student) => student.age > age);
}

// console.log(studentsOlderThan(20));

// ● Students Taking More Than X Courses: Create a function
// studentsWithMoreCourses(courseCount) that lists students taking more
// than a given number of courses.
function studentsWithMoreCourses(courseCount) {
  return students.filter((student) => student.courses.length > courseCount);
}
// console.log( studentsWithMoreCourses(2));

// ● Average Grade of All Students in a Specific Course: Create
// a function averageGradeInCourse(courseCode) that calculates the
// average grade of all students in a specific course.
function averageGradeInCourse(courseCode) {
  let sum = 0;
  let count = 0;
  students.map((student) => {
    student.courses.find((course) => {
      if (course.code === courseCode) {
        course.grades.map((grade) => {
          sum += grade;
          count++;
        });
      }
    });
  });
  return (sum / count).toFixed(2);
}
// console.log(averageGradeInCourse('PHYS101'));

//! ● Find Students with No Failed Courses: Create a function
// studentsWithNoFails() that lists students who have no grades below 70
// in any of their courses.
function studentsWithNoFails() {
  let studentList = []
  let hasFailed = false
  students.filter(student => {
    student.courses.map(course => {
      hasFailed = !(course.grades.find(grade => grade < 50)) 
    })
    hasFailed ? studentList.push(student) : studentList;
  })
  return studentList
}
// console.log(studentsWithNoFails());

// ● Add a Grade to a Specific Course for Multiple Students:
// Create a function addGradeToMultipleStudents(studentIds,
// courseCode, grade) that adds the same grade to a specific course for
// multiple students.
function addGradeToMultipleStudents(studentIds, courseCode, grade) {
  studentIds.map((studentId) => {
    students.find((student) => {
      if (student.id == studentId) {
        student.courses.find((course) => {
          if (course.code === courseCode) {
            course.grades.push(grade);
            console.log('student ', student);
            console.log('grades: ', course.grades);
          }
        });
      }
    });
  });
}
// addGradeToMultipleStudents([5, 6], 'MATH102', 85);

// ● Sort Students by Name: Create a function sortStudentsByName()
// that displays all students sorted alphabetically by their name.
function sortStudentsByName() {
  return listStudents(students).sort()
}
// console.log(sortStudentsByName());

// ● List Courses Taken by Less Than X Students: Create a
// function lessPopularCourses(studentCount) that lists all courses taken
// by fewer than a given number of students.
function lessPopularCourses(studentCount){
  students.filter(student => {
    student.courses.filter(course => {
      if(studentCount > studentsInCourse(students, course.code).length){
        console.log(course.code, " => has less than ", studentCount, " students");
      }
    })
  })
}
// lessPopularCourses(2);

// ● Bonus Challenges:
// ○ Find the student with the highest average across all their
// courses.

function findStudentHighestAverage(){
  let max = 0
  let highestStudent = {}
  students.filter(student => {
    student.courses.filter(course => {
      if(averageGradeInCourse(course.code) > max){
        max = averageGradeInCourse(course.code)
        highestStudent = student
      }
    })
  })
  return highestStudent
}
// console.log(findStudentHighestAverage());

// ○ List all courses that have an average grade below 70.
function findCourseAverage(){
  let courseList = []
  students.map(student => {
    student.courses.map(course => {
      if(averageGradeInCourse(course.code) < 85){
        courseList.push(course.code)
      }
    })
  })
  return `courses average that Less than 85 are: ${courseList}`
}
// console.log(findCourseAverage());

// ○ Find students who are taking both "Introduction to
// Programming" and "Advanced Programming".
function findStudentWithSpecificCourses(course1 , course2){
  return students.filter(student => {
    return (student.courses.some(courseName => courseName.name == course1) && student.courses.some(courseName => courseName.name ==  course2))
  })
}
// console.log(findStudentWithSpecificCourses("Introduction to Programming" , "Advanced Programming" ));

// ● Tips:
// ○ Make use of array methods like push(), find(), findIndex(),
// filter(),some(),reduce(),map()

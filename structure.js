class Student {
    constructor(studentId, name, grade = "") {
      this.studentId = studentId;
      this.name = name;
      this.grade = grade;
    }
  }
  
  class Instructor {
    constructor(name, office) {
      this.name = name;
      this.office = office;
    }
  }
  
  class Course {
    constructor(courseCode, courseName, credits, instructor, enrolledStudents = []) {
      this.courseCode = courseCode;
      this.courseName = courseName;
      this.credits = credits;
      this.instructor = instructor;
      this.enrolledStudents = enrolledStudents;
    }
  }
  
  class Department {
    constructor(name, head, courses = []) {
      this.name = name;
      this.head = head;
      this.courses = courses;
    }
  }
  
  class FacultyMember {
    constructor(name, department, position) {
      this.name = name;
      this.department = department;
      this.position = position;
    }
  }
  
  class University {
    constructor(name, departments = [], students = [], faculty = []) {
      this.name = name;
      this.departments = departments;
      this.students = students;
      this.faculty = faculty;
    }
  }
  
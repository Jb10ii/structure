class Database {
    constructor() {
      this.university = {
        name: "",
        departments: [
          {
            name: "",
            head: "",
            courses: [
              {
                courseCode: "",
                courseName: "",
                credits: 0,
                instructor: {
                  name: "",
                  office: ""
                },
                enrolledStudents: [
                  {
                    studentId: 0,
                    name: "",
                    grade: ""
                  }
                ]
              }
            ]
          }
        ],
        students: [
          {
            studentId: 0,
            name: "",
            major: ""
          }
        ],
        faculty: [
          {
            name: "",
            department: "",
            position: ""
          }
        ]
      };
    }
  }
 
  

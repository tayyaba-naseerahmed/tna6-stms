#!/usr/bin/env node
interface Student_name {
    id: number;
    name: string;
    email: string;
  }
  
  interface Teacher {
    id: number;
    name: string;
    email: string;
  }
  
  interface Course {
    id: number;
    name: string;
    teacherId: number;
  }
  
  class StudentTeacherManagementSystem {
    private students: Student_name[] = [];
    private teachers: Teacher[] = [];
    private courses: Course[] = [];
    Student: Student_name[] | undefined;
  
    addStudents(studentsData: { name: string; email: string }[]): void {
      studentsData.forEach((studentData) => {
        const newStudent: Student_name = { id: this.students.length + 1, ...studentData };
        this.students.push(newStudent);
      });
    }
  
    addTeachers(teachersData: { name: string; email: string }[]): void {
      teachersData.forEach((teacherData) => {
        const newTeacher: Teacher = { id: this.teachers.length + 1, ...teacherData };
        this.teachers.push(newTeacher);
      });
    }
  
    addCourses(coursesData: { name: string; teacherId: number }[]): void {
      coursesData.forEach((courseData) => {
        const newCourse: Course = { id: this.courses.length + 1, ...courseData };
        this.courses.push(newCourse);
      });
    }
  
    getStudents(): Student_name[] {
      return this.students;
    }
  
    getTeachers(): Teacher[] {
      return this.teachers;
    }
  
    getCourses(): Course[] {
      return this.courses;
    }
  }
  
  const managementSystem = new StudentTeacherManagementSystem();
  
  managementSystem.addStudents([
    { name: "Mehmet Han", email: "mehmethan12@example.com" },
    { name: "Murad Baloch", email: "muradbaloch22@example.com" },
    { name: "Mihirmah Suleiman", email: "mihirmahdashti29@example.com" },
    { name: "Khizra Naseer", email: "khizranaseer@example.com"}
  ]);
  
  managementSystem.addTeachers([
    { name: "Naseem Bano", email: "naseembano09@example.com" },
    { name: "Farzana khan", email: "farzanakhan78@example.com" },
    { name: "Ali Akbar", email: "aliakbar55@example.com"},
    { name: "Hayder Ali" , email:"hayderali313@example.com"},
  ]);
  
  managementSystem.addCourses([
    { name: "Python 101", teacherId: 1 },
    { name: "Web Development 102", teacherId: 2 },
    { name: "JavaScript 103", teacherId: 3 },
    { name: "Css 104" , teacherId: 4},
  ]);
  
  console.log(managementSystem.getStudents());
  console.log(managementSystem.getTeachers());
  console.log(managementSystem.getCourses());
  
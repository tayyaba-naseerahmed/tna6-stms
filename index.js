#!/usr/bin/env node
class StudentTeacherManagementSystem {
    students = [];
    teachers = [];
    courses = [];
    Student;
    addStudents(studentsData) {
        studentsData.forEach((studentData) => {
            const newStudent = { id: this.students.length + 1, ...studentData };
            this.students.push(newStudent);
        });
    }
    addTeachers(teachersData) {
        teachersData.forEach((teacherData) => {
            const newTeacher = { id: this.teachers.length + 1, ...teacherData };
            this.teachers.push(newTeacher);
        });
    }
    addCourses(coursesData) {
        coursesData.forEach((courseData) => {
            const newCourse = { id: this.courses.length + 1, ...courseData };
            this.courses.push(newCourse);
        });
    }
    getStudents() {
        return this.students;
    }
    getTeachers() {
        return this.teachers;
    }
    getCourses() {
        return this.courses;
    }
}
const managementSystem = new StudentTeacherManagementSystem();
managementSystem.addStudents([
    { name: "Mehmet Han", email: "mehmethan12@example.com" },
    { name: "Murad Baloch", email: "muradbaloch22@example.com" },
    { name: "Mihirmah Suleiman", email: "mihirmahdashti29@example.com" },
    { name: "Khizra Naseer", email: "khizranaseer@example.com" }
]);
managementSystem.addTeachers([
    { name: "Naseem Bano", email: "naseembano09@example.com" },
    { name: "Farzana khan", email: "farzanakhan78@example.com" },
    { name: "Ali Akbar", email: "aliakbar55@example.com" },
    { name: "Hayder Ali", email: "hayderali313@example.com" },
]);
managementSystem.addCourses([
    { name: "Python 101", teacherId: 1 },
    { name: "Web Development 102", teacherId: 2 },
    { name: "JavaScript 103", teacherId: 3 },
    { name: "Css 104", teacherId: 4 },
]);
console.log(managementSystem.getStudents());
console.log(managementSystem.getTeachers());
console.log(managementSystem.getCourses());
export {};

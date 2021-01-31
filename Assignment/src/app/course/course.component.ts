import { Component,OnInit } from '@angular/core';
@Component({
    selector: 'app-course',
    templateUrl: 'course.component.html'

})
export class CourseComponent implements OnInit {
    public courseList: any = [];
    public studentList: any = [];
    public courseName: any;
    public showCourseTextBox: boolean = false;
    public showStudentTextbox: boolean = false;
    public showStudentSection: boolean = false;
    public studentName: any;
    public selectedCourseId: any;
    public selectedStudentList: any = []
    constructor() { }
    ngOnInit() {

    }
    addCourse() {
        this.courseList.push({ "course_id": this.courseList.length + 1, "course_name": this.courseName });
        this.showCourseTextBox = false;
        this.courseName=''

    }
    removeCourse() {
        this.showCourseTextBox = false;

    }
    addNewCourse() {
        this.showCourseTextBox = true;

    }
    addNewStudent() {
        this.studentName = '';
        this.showStudentTextbox = true;
    }
    getStudentsByCourse(event) {
        this.showStudentSection = true
        this.selectedCourseId = event.target.value;
        this.getStudentList();
    }
    getStudentList() {
        this.selectedStudentList = this.studentList.filter((student) => {
            return student.course_id == this.selectedCourseId
        })
    }
    addStudent() {
        this.studentList.push({ "course_id": this.selectedCourseId, "student_id": this.studentList.length + 1, "student_name": this.studentName });
        this.showStudentTextbox = false;
        this.getStudentList();

    }
    removeStudent() {
        this.showStudentTextbox = false;

    }

}
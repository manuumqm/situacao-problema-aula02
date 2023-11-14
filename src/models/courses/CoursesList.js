export class CoursesList {
    constructor() {
        this.courses = [];
    }

    getAllCourses() {
        return this.courses;
    }

    getCourseById() {
        return this.courses.find((course) => course.id == id);
    }

    createCourse() {
        this.courses.push(course);
    }

    updateCourse(id, name, description, limitVaga) {
        const course = this.getCourseById(id);

        if (!course) {
            return null;
        }

        course.name = name;
        course.description = description;
        course.limitVaga = limitVaga;

        return course;
    }

    removeCourse(courseId) {
        this.courses = this.courses.filter((course) => course.id != courseId);
    }

}
import findCourseById from "../utils/findCourseById.js";
import { courseList } from "../vars/variabels.js";

function addStudent(courseId) {
    const course = findCourseById(courseList, courseId);
    const student = prompt('Add students', 'Petya');

    course.studentsList.push(student);

    return { student, index: course.studentsList.length - 1 }
}

export default addStudent;

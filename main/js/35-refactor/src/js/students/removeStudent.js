import findCourseById from "../utils/findCourseById.js";
import { courseList } from "../vars/variabels.js";

function removeStudent(removeStudentBtn, courseId) {
    const indexStudent = removeStudentBtn.dataset.index;

    const course = findCourseById(courseList, courseId);

    course.studentsList.splice(indexStudent, 1);
}

export default removeStudent;

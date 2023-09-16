import { courseListElement, addStudentClassName, removeCourseClassName, removeStudentClassName } from "../vars/variabels.js";
import addStudent from "../students/addStudent.js";
import addStudentHtml from "../students/addStudentHtml.js";
import getStudentTemplate from "../students/getStudentTemplate.js";
import removeCourse from "./removeCourse.js";
import removeCourseHtml from "./removeCourseHtml.js";
import getDataAttrIdCourse from "../utils/getDataAttrIdCourse.js";
import removeStudent from "../students/removeStudent.js";
import removeStudentHtml from "../students/removeStudentHtml.js";

function courseEvent() {
    courseListElement.addEventListener('click', function (e) {
        const addStudentBtn = e.target.closest(`.${addStudentClassName}`);
        const removeCourseBtn = e.target.closest(`.${removeCourseClassName}`);
        const removeStudentBtn = e.target.closest(`.${removeStudentClassName}`)

        const courseId = getDataAttrIdCourse(addStudentBtn || removeCourseBtn || removeStudentBtn);

        if (!courseId) return;

        if (addStudentBtn) {
            const { student, index } = addStudent(courseId);
            addStudentHtml(
                getStudentTemplate(student, index, courseId),
                addStudentBtn
            );
        }

        if (removeCourseBtn) {
            removeCourse(courseId);
            removeCourseHtml(removeCourseBtn);
        }

        if (removeStudentBtn) {
            removeStudent(removeStudentBtn, courseId);
            removeStudentHtml(removeStudentBtn);
        }
    });
}

export default courseEvent;

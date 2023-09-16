import { courseListElement } from "../vars/variabels.js";
import createTemplate from "./createTemplate.js";

function addCourseHtml(courseData) {
    if (!courseData) return;

    courseListElement.insertAdjacentHTML('beforeend', createTemplate(courseData));
}

export default addCourseHtml;

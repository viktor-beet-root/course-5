import { addStudentForm } from './vars/variabels.js';
import changeSpeakers from './speakers/changeSpeakers.js';
import createFormValidation from './formValidation/createFormValidatio.js';
import createCourse from './course/createCourse.js';
import courseEvent from './course/courseEvent.js';
import addCourseHtml from './course/addCourseHtml.js';
import setEventForm from './course/setEventForm.js';

courseEvent();

setEventForm(addStudentForm);

changeSpeakers(addStudentForm);

createFormValidation(addStudentForm, (data) => {
    const courseData = createCourse(data);

    addCourseHtml(courseData);

    addStudentForm.reset();
});

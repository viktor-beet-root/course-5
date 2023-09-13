import createFormValidation from './formValidation/createFormValidatio.js';

const addStudentForm = document.querySelector('.add-student-form');


createFormValidation(addStudentForm, createCourse);
// 10.12.23 23.10.15 23-12-12 12/12/23


function createCourse(data) {
    const courseData = Object.fromEntries([...data]);
}

import { setCourseId, courseList } from '../vars/variabels.js';

function createCourse(data) {
    const courseData = Object.fromEntries([...data]);

    courseData.id = setCourseId();
    courseData.studentsList = [];

    courseList.push(courseData);

    return courseData;
}

export default createCourse;

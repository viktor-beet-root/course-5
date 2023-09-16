import { setCourseList, courseList } from "../vars/variabels.js";

function removeCourse(couseId) {
    setCourseList(
        courseList.filter((course) => course.id !== couseId)
    );
}

export default removeCourse;

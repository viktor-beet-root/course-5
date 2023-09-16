function findCourseById(courseList, id) {
    return courseList.find((course) => course.id === id);
}

export default findCourseById;

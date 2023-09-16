function getDataAttrIdCourse(element) {
    if (!element) return null;

    return +element.dataset.courseId;
}

export default getDataAttrIdCourse;

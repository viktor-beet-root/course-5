function getStudentTemplate(student, index, courseId) {
    return (`
        <li class="students-list__item mb-2">
            <span>${student}</span>
            <button data-course-id="${courseId}" data-index="${index}" type="button" class="btn btn-danger remove-student">Remove</button>
        </li>
    `);
}

export default getStudentTemplate;

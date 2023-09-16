function removeStudentHtml(removeStudentBtn) {
    const studentElement = removeStudentBtn.closest('.students-list__item');

    if (studentElement) studentElement.remove();
}

export default removeStudentHtml;

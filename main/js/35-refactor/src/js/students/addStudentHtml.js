function addStudentHtml(html, addStudentBtn) {
    const studentsListUl = addStudentBtn.closest('td')?.querySelector('.students-list');

    studentsListUl.insertAdjacentHTML('beforeend', html);
}


export default addStudentHtml;

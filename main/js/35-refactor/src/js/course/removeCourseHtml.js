function removeCourseHtml(removeCourseBtn) {
    const courseWrapper = removeCourseBtn.closest('tr.inner-box');

    if (courseWrapper) courseWrapper.remove();
}

export default removeCourseHtml;

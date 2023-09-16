import onResetForm from "./onResetForm.js";

function setEventForm(addStudentForm) {
    addStudentForm.addEventListener('reset', onResetForm);
}

export default setEventForm;

import JustValidate from "just-validate";

function createFormValidation(form, getUserInfo) {


    const validator = new JustValidate(form);

    validator.addField('[name="fullname"]', [
        {
            rule: 'required'
        },
        {
            rule: 'customRegexp',
            value: /[a-z]/gi,
        },
        {
            rule: 'minLength',
            value: 3,
        },
    ]).addField('[name="email"]', [
        {
            rule: 'required'
        },
        {
            rule: 'email',
        }
    ]);

    validator.onSuccess((e) => {
        getUserInfo(new FormData(e.target))
    })
}


export default createFormValidation;

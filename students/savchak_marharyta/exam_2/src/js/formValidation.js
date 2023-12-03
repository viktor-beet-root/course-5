import JustValidate from 'just-validate';

export default function createValidation() {
    const validator = new JustValidate('.form');

    validator.addField('[name="user-name"]', [
        {
            rule: 'required',
            errorMessage: 'This field must be filled',
        },
        {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Must contain at least two letters',
        },
        {
            rule: 'customRegexp',
            value: /[a-z, A-Z]/gi,
            errorMessage: 'Attention: Acceptable characters: [a-z, A-Z]',
        },
    ]).addField('[name="email"]', [
        {
            rule: 'required',
            errorMessage: 'This field must be filled'
        },
        {
            rule: 'email',
            errorMessage: 'Does not match the email format'
        },
    ]);
}

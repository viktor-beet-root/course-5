import JustValidate from 'just-validate';

function createFormValidation(form) {
    const validator = new JustValidate(form, undefined, []);

    console.log(validator);
    validator.addField('[name="user-name"]', [
        {
            rule: 'required',
        },
        {
            rule: 'minLength',
            value: 2,
        },
    ]).addField('[name="email"]', [
        {
            rule: 'required',
        },
        {
            rule: 'email',
        },
    ]);
    validator.onSuccess((event) => {
        const formData = new FormData(event.target);

        fetch('#', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Помилка відправки на сервер:', error);
            });
    });
}
export default createFormValidation;

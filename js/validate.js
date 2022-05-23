const validate = new window.JustValidate('#form');

validate.addField('#number', [{
    rule: 'number',
    errorMessage: 'Недопустимый формат'
}, {
    rule: 'minLength',
    value: 10,
}, {
    rule: 'maxLength',
    value: 13,
}
]);


let form = document.querySelector('.just-validate-error-label');

form.classList.add('.form__list-item-button-custom');

console.log(form);


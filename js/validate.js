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

var myClass = document.body.classList.add('link-social-icon');

alert(myClass)
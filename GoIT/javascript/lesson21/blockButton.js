
var inputField = document.body.querySelector('.task-form__text');

var btn = document.body.querySelector('.btn-primary');

inputField.addEventListener('input', blockButton);

function blockButton () {

    if (!inputField.value) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }

}
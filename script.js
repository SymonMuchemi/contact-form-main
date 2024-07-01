let firstName = document.getElementById('first_name');
let lastName = document.getElementById('last_name');
let email = document.getElementById('email');
let query = document.getElementById('General-enquiry');
let submit = document.getElementById('submit');
let confirmationBox = document.getElementById('confirmation-box')

// error texts
let firstNameError = document.getElementById('first_name-error')
let lastNameError = document.getElementById('last_name-error')
let emailError = document.getElementById('email-error')
let queryError = document.getElementById('query-error')
let messageError = document.getElementById('message-error')
let consentError = document.getElementById('consent-error')

confirmationBox.style.display = 'None'
// firstNameError.style.display = 'block'
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


function confirmEmailPatter(email) {
    return emailPattern.test(email);
}

// check if input field is empty
function checkIfFieldIsEmpty(field) {
    return field.value === "";
}

submit.addEventListener('click', function (event) {

    event.preventDefault();

    if (checkIfFieldIsEmpty(firstName) === true) {
        firstNameError.style.display = "block";
    }
})

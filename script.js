const firstName = document.getElementById('name-input');
const lastName = document.getElementById('lastname-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');
const fNameWarning = document.querySelectorAll('.fname-error');
const lNameWarning = document.querySelectorAll('.lname-error');
const passwordWarning = document.querySelectorAll('.password-error');
const emailWarningOne = document.getElementById('email-warning1');
const emailWarningTwo = document.getElementById('email-warning2');
const emailIcon = document.getElementById('email-error');

const checkEmail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);


function checkInput() {
    let fName = firstName.value;
    let lName = lastName.value;
    let email = emailInput.value;
    let password = passwordInput.value;

    /* To check if first name is not empty */
    if(fName.trim().length === 0 || fName === null) {
        fNameWarning.forEach(error => error.style.display = 'block');
    }
    else {
        fNameWarning.forEach(error => error.style.display = 'none');
    }

    /* To check if last name is not empty */
    if(lName.trim().length === 0 || lName === null) {
        lNameWarning.forEach(error => error.style.display = 'block');
    }
    else {
        lNameWarning.forEach(error => error.style.display = 'none');
    }

     /* To check password is not empty */
    if(password.trim().length === 0 || password === null) {
        passwordWarning.forEach(error => error.style.display = 'block');
    }
    else if(password.trim().length != 0 || password != null) {
        passwordWarning.forEach(error => error.style.display = 'none');

    }

     /* To check if email is valid*/
    if(checkEmail.test(email) != true) {
       emailWarningTwo.style.display = 'block';
       emailIcon.style.display = 'block';
    }
    else {
        emailWarningTwo.style.display = 'none';
        emailIcon.style.display = 'none';
    }

}

submitButton.onclick = () => {
   checkInput();
   
}
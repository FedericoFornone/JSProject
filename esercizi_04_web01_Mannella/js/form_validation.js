const FORM = document.getElementById("registration-form");

FORM.addEventListener('submit', (e) => {

    e.preventDefault();

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let age = document.getElementById("age").value;
    let cap = document.getElementById("cap").value;
    /**
     * Not used
     * let address = document.getElementById("address").value;
     */
    let email = document.getElementById("email").value;

    let errorMessages = "";

    if (hasNumber(firstname)) {
        errorMessages = "The firstname must not contains numbers!\n";
    }

    if (hasNumber(lastname)) {
        errorMessages += "The lastname must not contains numbers!\n";
    }

    if (isNaN(age)) {
        errorMessages += "The age must be a valid number!\n";
    }

    if (isNaN(cap)) {
        errorMessages += "The cap must be a valid number!\n";
    }

    if(!isValidEmail(email)){
        errorMessages +="The email must be valid!\n";
    }

    if (errorMessages !== "") {
        alert(errorMessages);
        window.location.reload();
    }else{
        alert("Registrated successfully!");
    }

});

function hasNumber(str) {
    return /\d/.test(str);
}

function isValidEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email);
}
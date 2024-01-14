function validForm() {
    let estValid = true;
    const emailInput = document.getElementById('email');

    if (emailInput.value = "") {
        document.getElementById("error_message").innerHTML = "Valid Email Required";
        emailInput.nextElementSibling.style.display = "block";
        emailInput.style.border = 0.0625rem solid red;
    } else {
        emailInput.nextElementSibling.style.display = "none";
        emailInput.style.border = 0.0625rem solid black;
    }

    if (estValid) {
        const emailPlaceholder = document.getElementById('email_placeholder');
        emailPlaceholder.textContent = emailInput.value;
        document.getElementById('success_message').style.display = "block";
    }
}
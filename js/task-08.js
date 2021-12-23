const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    const formElements = event.currentTarget.elements;

    const mailEl = formElements.email.value;
    const passwordEl = formElements.password.value;

    const formData = {
        mailEl,
        passwordEl,
    }
    console.log(formData);
    event.currentTarget.reset();
}

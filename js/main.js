const submitBtns = document.querySelectorAll("[data-submit]");

submitBtns.forEach(submit => {
    submit.addEventListener("click", e => {
        e.preventDefault();
        checkEmail(submit)
    })
});

function checkEmail(btn) {
    const emailForm = btn.previousElementSibling.firstElementChild;
    const emailValue = emailForm.value;
    const emailPattern = /^([a-zA-Z]{1,})([\w \. \-]+)(\@[\w]{3,8})(\.[a-zA-Z]{2,4})(\.[a-zA-Z]{2,3})?$/
    
    if (!emailValue) {
        showError(emailForm, "empty");
    } else {
        if (emailValue.match(emailPattern)) {
            addValidClass(emailForm)
        } else {
            showError(emailForm, "invalid");
        }
    }
}

function showError(form, errType) {
    const fieldContainer = form.parentElement;
    const errorText = form.nextElementSibling;
    const allElem = [fieldContainer, form, errorText];

    switch (errType) {
        case "empty":
            addErrorClass(allElem);
            errorText.textContent = "Please input your email address";
            break;
        case "invalid":
            addErrorClass(allElem);
            errorText.textContent = "Please check your email";
    }
}

const addErrorClass = elem => {
    elem.forEach(el => {
        el.classList.remove("valid")
        el.classList.add("error")
    })
}

const addValidClass = form => {
    const fieldContainer = form.parentElement;
    const errorText = form.nextElementSibling;
    const allElem = [form, fieldContainer, errorText]

    allElem.forEach(elem => {
        elem.classList.remove("error")
        elem.classList.add("valid")
    })   
}
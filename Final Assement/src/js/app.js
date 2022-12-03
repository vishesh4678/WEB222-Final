
const checkValue = {
    form: document.getElementById('contact-form'),
    typeRadios: document.querySelectorAll("input[type=radio][name=type]"),
    rate: {
        container: document.getElementById('rate-container'),
        input: document.getElementById("rate-input"),
    }
}

function checkFormValidation(e) {
    e.preventDefault();
    const checkFormAmount = new FormData(checkValue.form);
    const checkDataResponse = Object.fromEntries(checkFormAmount.entries());

    const checkValidation = new Validator(checkDataResponse, {
        postalcode: {
            type: "regex",
            pattern: /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i
        },
    });
    if (checkValidation.valid()) {
        this.submit();
    }

}

function handleRadioChange()
{
    if (this.value === "Other") {
        checkValue.rate.container.style.display = "block";
        checkValue.rate.input.setAttribute("required", "");
    } else {
        checkValue.rate.container.style.display = "none";
        checkValue.rate.input.removeAttribute("required");
    }
}

checkValue.form.addEventListener("submit", checkFormValidation);
checkValue.typeRadios.forEach(radio => radio.addEventListener("change", handleRadioChange));
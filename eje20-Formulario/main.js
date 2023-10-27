document.getElementById("myForm").addEventListener("input", function() {
    // Función para comprobar la validez de todos los campos
    function areFieldsValid() {
        const firstname = document.getElementById("firstname").checkValidity();
        const lastname = document.getElementById("lastname").checkValidity();
        const username = document.getElementById("floatingInputGroup1").checkValidity();
        const city = document.getElementById("city").checkValidity();
        const zip = document.getElementById("zip").checkValidity();
        const check = document.getElementById("check").checkValidity();

        return firstname && lastname && username && city && zip && check;
    }

    const submitButton = document.getElementById("submitButton");
    if (areFieldsValid()) {
        submitButton.removeAttribute("enable");
    } else {
        submitButton.setAttribute("disabled", "disabled");
    }
});
document.getElementById("myForm").addEventListener("input", function() {
    // Función para comprobar la validez de todos los campos
    function areFieldsValid() {
        const firstname = document.getElementById("firstname").checkValidity();
        const lastname = document.getElementById("lastname").checkValidity();
        const username = document.getElementById("username").checkValidity();
        const city = document.getElementById("city").checkValidity();
        const pais = document.getElementById("pais").checkValidity();
        const zip = document.getElementById("zip").checkValidity();
        const check = document.getElementById("check").checkValidity();

        return firstname && lastname && username && city && pais && zip && check;
    }

    const submitButton = document.getElementById("submitButton");
    if (areFieldsValid()) {
        submitButton.removeAttribute("disabled");
    } else {
        submitButton.setAttribute("disabled", "disabled");
    }
});
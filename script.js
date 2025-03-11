document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login-container").classList.add("show");

    // Detectar la tecla "Enter" para iniciar sesión
    document.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            validateLogin();
        }
    });
});

function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    
    if (email === "" || password === "") {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        alert("Inicio de sesión exitoso");
    }
}
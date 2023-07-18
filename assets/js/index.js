//*****************************
const passwordInput = document.getElementById("password");
const togglePasswordImage = document.getElementById("toggle-password");

togglePasswordImage.addEventListener("click", function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordImage.textContent = "Masquer";
    } else {
        passwordInput.type = "password";
        togglePasswordImage.textContent = "Afficher";
    }
});

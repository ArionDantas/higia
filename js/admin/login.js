const togglePassword = document.getElementById("acessarSenha");
const password = document.getElementById("acessarSenha");
const inputSenha = document.getElementById("input-senha");


if (togglePassword) {
    togglePassword.addEventListener("click", function () {
        // toggle the type attribute
        const type = inputSenha.getAttribute("type") === "password" ? "text" : "password";
        inputSenha.setAttribute("type", type);
        // toggle the eye icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
};
const togglePassword = document.getElementById("acessarSenha");
const password = document.querySelector("#password");

console.log(togglePassword);

if (togglePassword) {
    togglePassword.addEventListener("click", function () {

        // toggle the type attribute
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        // toggle the eye icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
};
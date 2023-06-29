const inputNomeClienteCadastro = document.querySelector("#inputNomeClienteCadastro");
const inputEmailClienteCadastro = document.querySelector("#inputEmailClienteCadastro");
const inputCPFClienteCadastro = document.querySelector("#inputCPFClienteCadastro");
const inputAniversarioClienteCadastro = document.querySelector("#inputAniversarioClienteCadastro");

const buttomNovoCliente = document.querySelector("#buttomNovoCliente");

buttomNovoCliente.addEventListener("click", function() {
    inputNomeClienteCadastro.value = "";
    inputEmailClienteCadastro.value = "";
    inputCPFClienteCadastro.value = "";
    inputAniversarioClienteCadastro.value = "";
})

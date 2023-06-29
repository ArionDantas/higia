const inputMatricula = document.querySelector("#inputMatricula");
const inputStatus = document.querySelector("#inputStatus");
const inputData = document.querySelector("#inputData");
const inputNomeCliente = document.querySelector("#inputNomeCliente");
const inputEmailCliente = document.querySelector("#inputEmailCliente");
const inputEnderecoCliente = document.querySelector("#inputEnderecoCliente");
const buttomLimpar = document.querySelector("#buttomLimpar");

buttomLimpar.addEventListener("click", function() {
    inputMatricula.value = "";
    inputStatus.value = "";
    inputData.value = "";
    inputNomeCliente.value = "";
    inputEmailCliente.value = "";
    inputEnderecoCliente.value = "";
})

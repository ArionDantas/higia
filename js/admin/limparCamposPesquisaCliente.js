const inputType = document.querySelector("#inputType");
const inputStatus = document.querySelector("#inputStatus");
const inputData = document.querySelector("#inputData");
const inputMatricula = document.querySelector("#inputMatricula");
const inputPalavraChave = document.querySelector("#inputPalavrasChave");
const inputUnidade = document.querySelector("#inputUnidade");
const buttomLimpar = document.querySelector("#buttomLimpar");

buttomLimpar.addEventListener("click", function() {
    inputType.value = "";
    inputStatus.value = "";
    inputData.value = "";
    inputMatricula.value = "";
    inputPalavraChave.value = "";
    inputUnidade.value = "";
})

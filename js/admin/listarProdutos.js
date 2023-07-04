let produtos = [
    { id: 1, nome: 'dipirona', tipo: 'remedio', unidade: 'vitoria', valor: 10 },
    { id: 2, nome: 'naftalina', tipo: 'remedio', unidade: 'vitoria', valor: 670 },
    { id: 3, nome: 'ubuprofeno', tipo: 'remedio', unidade: 'vitoria', valor: 50 }
]

let listagemProdutos = document.getElementById('listagem-produtos');
let list = '';

function listProdutos(produtos) {

    produtos.forEach((element, index) => {
        list += `
        <tr>
        <td>${element.id}</td>
        <td>${element.nome}p</td>
        <td>${element.tipo}</td>
        <td>${element.unidade}</td>
        <td>R$${element.valor}</td>
        <td class="d-flex align-content-center gap-1">
            <button type="button" data-bs-target="#modalVisualizarProduto${element.id}" data-bs-toggle="modal"
                class="btn btn-success justify-content-center d-flex align-content-center">
                <span class="material-symbols-outlined">
                    visibility
                </span>
            </button>
            <button type="button" data-bs-target="#modalEditarProduto${element.id}" data-bs-toggle="modal"
                class="btn btn-primary d-flex justify-content-center align-content-center">
                <span class="material-symbols-outlined">
                    edit_square
                </span>
            </button>
            <button type="button"
                class="btn btn-danger d-flex justify-content-center align-content-center">
                <span class="material-symbols-outlined">
                    close
                </span>
            </button>
        </td>
        </tr>

        <div class="modal fade" id="modalEditarProduto${element.id}" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Adicionar
                        cliente</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form method="get">

                        <div class="row">
                            <div class="col">
                                <div class="mb-3">
                                    <label for="inputNomeClienteCadastro"
                                        class="form-label">Nome</label>
                                    <input type="text" class="form-control"
                                        id="inputNomeClienteCadastro">
                                </div>
                            </div>
                            <div class="col">
                                <div class="mb-3">
                                    <label for="inputEmailClienteCadastro"
                                        class="form-label">Email</label>
                                    <input type="email" class="form-control"
                                        id="inputEmailClienteCadastro">
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="mb-3">
                                    <label for="inputCPFClienteCadastro"
                                        class="form-label">CPF</label>
                                    <input type="text" class="form-control"
                                        id="inputCPFClienteCadastro">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <div class="mb-3">
                                    <label for="inputAniversarioClienteCadastro"
                                        class="form-label">Aniversário</label>
                                    <input type="date" class="form-control"
                                        id="inputAniversarioClienteCadastro">
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-success">Cadastrar</button>

                        <button type="reset" class="btn btn-danger"
                            data-bs-dismiss="modal">Fechar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

        <div class="modal fade" id="modalVisualizarProduto${element.id}" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Adicionar
                        cliente</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form method="get">

                        <div class="row">
                            <div class="col">
                                <div class="mb-3">
                                    <label for="inputNomeClienteCadastro"
                                        class="form-label">Nome</label>
                                    <input type="text" class="form-control"
                                        id="inputNomeClienteCadastro">
                                </div>
                            </div>
                            <div class="col">
                                <div class="mb-3">
                                    <label for="inputEmailClienteCadastro"
                                        class="form-label">Email</label>
                                    <input type="email" class="form-control"
                                        id="inputEmailClienteCadastro">
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="mb-3">
                                    <label for="inputCPFClienteCadastro"
                                        class="form-label">CPF</label>
                                    <input type="text" class="form-control"
                                        id="inputCPFClienteCadastro">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <div class="mb-3">
                                    <label for="inputAniversarioClienteCadastro"
                                        class="form-label">Aniversário</label>
                                    <input type="date" class="form-control"
                                        id="inputAniversarioClienteCadastro">
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-success">Cadastrar</button>

                        <button type="reset" class="btn btn-danger"
                            data-bs-dismiss="modal">Fechar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `
    
    listagemProdutos.innerHTML = list;
    
    });
}

listProdutos(produtos);
console.log(produtos);
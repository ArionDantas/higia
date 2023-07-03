let produtos = [
    { id: 1, nome: 'dipirona', tipo: 'remedio', unidade: 'vitoria', valor: 10 },
    { id: 2, nome: 'naftalina', tipo: 'remedio', unidade: 'vitoria', valor: 670 },
    { id: 3, nome: 'ubuprofeno', tipo: 'remedio', unidade: 'vitoria', valor: 50 }
]

let listagemClientes = document.getElementById('listagem-clientes');
let list = '';

function listClientes(clientes) {

    clientes.forEach((element, index) => {
        list += `
        <tr>
        <td>${clientes.id}</td>
        <td>${clientes.nome}p</td>
        <td>${clientes.tipo}</td>
        <td>${clientes.unidade}</td>
        <td>R$${clientes.valor}</td>
        <td class="d-flex align-content-center gap-1">
            <button type="button"
                class="btn btn-success justify-content-center d-flex align-content-center">
                <span class="material-symbols-outlined">
                    visibility
                </span>
            </button>
            <button type="button"
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
    `
    
    listagemClientes.innerHTML = list;
    
    });
}

listProdutos(clientes);
console.log(clientes);
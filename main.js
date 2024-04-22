const form = document.getElementById('form-contato');
const tabelaContatos = document.getElementById('tabela-contatos');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    if (nome && telefone) {
        if (!verificarContatoExistente(telefone)) {
            adicionarContato(nome, telefone);
            limparCampos();
        } else {
            alert('Este número de telefone já existe na tabela!');
        }
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

function verificarContatoExistente(telefone) {
    const rows = tabelaContatos.rows;

    for (let i = 0; i < rows.length; i++) {
        const cellTelefone = rows[i].cells[1];

        if (cellTelefone.textContent === telefone) {
            return true;
        }
    }

    return false;
}

function adicionarContato(nome, telefone) {
    const newRow = tabelaContatos.insertRow();
    const cellNome = newRow.insertCell(0);
    const cellTelefone = newRow.insertCell(1);

    cellNome.textContent = nome;
    cellTelefone.textContent = telefone;
}

function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
}
const usuarios = ['Matheus', 'Marcos', 'Lucas', 'João'];

function retornarNomeUsuarios() {
    return usuarios;
}

// a função abaixo adiciona um novo nome a lista de usuarios
// push usado para incluir o "nome" na lista de usuarios.
function adicionarNovoUsuario(nome) {
    usuarios.push(nome);
}

module.exports = {
    retornarNomeUsuarios,
    adicionarNovoUsuario
}

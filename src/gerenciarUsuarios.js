//const usuarios = ['Matheus', 'Marcos', 'Lucas', 'João'];

const usuarios = [
//objeto            
    {      //propriedade / valor da propriedade
            nome:'Jorge',
            email:'jorgemobil@live.com'
    },

    {
            nome:'Jaqueline',
            email:'jaqueforrico@gmail.com'
    },

    {
            nome:'Gustavo',
            email:'gorrico797@hotmail.com'
    }   

];

function retornarNomeUsuarios() {
    return usuarios;
}

// a função abaixo adiciona um novo nome a lista de usuarios
// push usado para incluir o "nome" na lista de usuarios.
function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario);
}

module.exports = {
    retornarNomeUsuarios,
    adicionarNovoUsuario
}

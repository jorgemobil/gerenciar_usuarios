const { retornarNomeUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuarios', function () {
    it('Validar que posso adicionar um novo  nome de usuario na lista', function () {
        // 1. Adicionar um novo nome na lista de usuarios
        adicionarNovoUsuario('Maria');

        // 2. Retornar a lista de usuarios na caixa lista de usuários
        const listaDeUsuarios = retornarNomeUsuarios();

        // 3. Comparar se o novo nome está no fim da lista de usuários
        expect(listaDeUsuarios.at(-1)).to.equal('Maria');

});

});
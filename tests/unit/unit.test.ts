import { testDouble, expect } from './config/helpers';
import User from '../../server/modules/User/service';

describe('Unit Test controller', () => {
    describe('Method create', () => {
        it('Deve criar um novo usuário', () => {
            const novoUsuario = {
                id: 23,
                name: 'Novo Usuario',
                email: 'novousuario@email.com',
                password: '1234',
            };
            const user = new User();
            return user.create(novoUsuario)
            .then((result) => {
                expect(result.dataValues).to.have.all.keys(
                    ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
                )
            });
        });
    });

    describe('Mehtod update', () => {
        it('Deve atualizar um usuário', ()=> {
            const usuarioAtualizado = {
                name: 'Nome atualizado',
                email: 'emailatualizado@email.com',
            };
            const user = new User();
            return user.update(23, usuarioAtualizado).then(data => {
                expect(data[0]).to.be.equal(1);
            });
        });
    });

    describe('Mehtod getUsers', () => {
        it('Deve retornar uma lista de usuários', ()=> {
            const user = new User();
            return user.getAll().then(data => {
                expect(data).to.be.an('array');
                expect(data[0]).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                );
            });
        });
    });

    describe('Mehtod delete', () => {
        it('Deve deletar um usuário', ()=> {
            const user = new User();
            return user.delete(23).then(data => {
                expect(data).to.be.equal(1);
            });
        });
    });
});
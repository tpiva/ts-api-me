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
            return User.create(novoUsuario)
                .then((result) => {
                    expect(result.dataValues).to.have.all.keys(
                        ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
                    )
                });
        });
    });

    describe('Method update', () => {
        it('Deve atualizar um usuário', () => {
            const usuarioAtualizado = {
                name: 'Nome atualizado',
                email: 'emailatualizado@email.com',
            };
            return User.update(23, usuarioAtualizado).then(data => {
                expect(data[0]).to.be.equal(1);
            });
        });
    });

    describe('Mehtod getUsers', () => {
        it('Deve retornar uma lista de usuários', () => {
            return User.getAll().then(data => {
                expect(data).to.be.an('array');
                expect(data[0]).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                );
            });
        });
    });

    describe('Method getByEmail', () => {
        it('Deve retornar um usuário pelo email', () => {
            return User.getByEmail('emailatualizado@email.com').then(data => {
                expect(data).to.be.an('object');
                expect(data).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                );
            });
        });
    });

    describe('Method getById', () => {
        it('Deve retornar um usuário pelo id', () => {
            return User.getById(23).then(data => {
                expect(data).to.be.an('object');
                expect(data).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                );
            });
        });
    });

    describe('Mehtod delete', () => {
        it('Deve deletar um usuário', () => {
            return User.delete(23).then(data => {
                expect(data).to.be.equal(1);
            });
        });
    });
});
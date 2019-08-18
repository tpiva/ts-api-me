import { expect } from './config/helpers';
import User from '../../server/modules/User/service';
const model = require('../../server/models');

describe('Unit Test controller', () => {

    const defaultUser = {
        id: 1,
        name: 'Default User',
        email: 'default@email.com',
        password: '1234',
    };

    beforeEach((done) => {
        model.User.destroy({
            where: {}
        })
        .then(() => {
            model.User.create(defaultUser).then(() => {
                console.log('Default user created');
                done();
            });
        });
    });

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
            return User.update(defaultUser.id, usuarioAtualizado).then(data => {
                expect(data[0]).to.be.equal(1);
            });
        });
    });

    describe('Mehtod getUsers', () => {
        it('Deve retornar uma lista de usuários', () => {
            return User.getAll().then(data => {
                expect(data).to.be.an('array');
            });
        });
    });

    describe('Method getByEmail', () => {
        it('Deve retornar um usuário pelo email', () => {
            return User.getByEmail(defaultUser.email).then(data => {
                expect(data).to.be.an('object');
                expect(data).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                );
            });
        });
    });

    describe('Method getById', () => {
        it('Deve retornar um usuário pelo id', () => {
            return User.getById(defaultUser.id).then(data => {
                expect(data).to.be.an('object');
                expect(data).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                );
            });
        });
    });

    describe('Mehtod delete', () => {
        it('Deve deletar um usuário', () => {
            return User.delete(defaultUser.id).then(data => {
                expect(data).to.be.equal(1);
            });
        });
    });
});
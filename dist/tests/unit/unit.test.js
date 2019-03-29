"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/modules/user/service");
var model = require('../../server/models');
describe('Testes Unitários do Controller', function () {
    var userDefault = {
        id: 1,
        name: 'Admin',
        email: 'admin@email.com',
        password: 'admin'
    };
    beforeEach(function (done) {
        model.User.destroy({
            where: {}
        })
            .then(function () {
            model.User.create(userDefault)
                .then(function (user) {
                console.log("Usu\u00E1rio default criado");
                done();
            });
        });
    });
    describe('Método Create', function () {
        it('Deve criar um novo usuário', function () {
            var newUser = {
                id: 2,
                name: 'Admin 2',
                email: 'admi2n@email.com',
                password: 'admin2'
            };
            return service_1.default.create(newUser)
                .then(function (data) {
                helpers_1.expect(data.dataValues).to.have.all.keys(['createdAt', 'email', 'id', 'name', 'password', 'updatedAt']);
            });
        });
    });
    describe('Método GET Users', function () {
        it('Deve retornar uma lista com todos os usuários', function () {
            return service_1.default.getAll()
                .then(function (data) {
                helpers_1.expect(data).to.be.an('array');
            });
        });
    });
    describe('Método Update', function () {
        it('Deve atualizar um usuário', function () {
            var updateUser = {
                name: 'adminupdate',
                email: 'adminupdate@email.com'
            };
            return service_1.default.update(userDefault.id, updateUser)
                .then(function (data) {
                helpers_1.expect(data[0]).to.be.equal(1);
            });
        });
    });
    describe('Método GetById', function () {
        it('Deve um usuário pelo ID', function () {
            return service_1.default.getById(userDefault.id)
                .then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Método GetByEmail', function () {
        it('Deve um usuário pelo ID', function () {
            return service_1.default.getByEmail(userDefault.email)
                .then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Método Delete', function () {
        it('Deve deletar um usuário', function () {
            return service_1.default.delete(userDefault.id)
                .then(function (data) {
                helpers_1.expect(data).to.be.equal(userDefault.id);
            });
        });
    });
});

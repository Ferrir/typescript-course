"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handlers_1 = require("../../api/responses/handlers");
var service_1 = require("./service");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getAll = function (req, res) {
        service_1.default
            .getAll()
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao buscar todos os usu\u00E1rios"));
    };
    UserController.prototype.createUser = function (req, res) {
        service_1.default
            .create(req.body)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.dbErrorHandler, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao criar um novo usu\u00E1rio"));
    };
    UserController.prototype.getById = function (req, res) {
        var id = parseInt(req.params.id);
        service_1.default
            .getById(parseInt(req.params.id))
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao consultar o usu\u00E1rio id = " + id));
    };
    UserController.prototype.updateUser = function (req, res) {
        var id = parseInt(req.params.id);
        var props = req.body;
        service_1.default
            .update(id, props)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao atualizar o usu\u00E1rio id = " + id + ", com " + props));
    };
    UserController.prototype.deleteUser = function (req, res) {
        var id = parseInt(req.params.id);
        service_1.default
            .delete(id)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao deletar o usu\u00E1rio id = " + id));
    };
    return UserController;
}());
exports.default = new UserController();

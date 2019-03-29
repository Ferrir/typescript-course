"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handlers_1 = require("../../api/responses/handlers");
var service_1 = require("./service");
var AuthorController = /** @class */ (function () {
    function AuthorController() {
    }
    AuthorController.prototype.getAll = function (req, res) {
        service_1.default
            .getAll()
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao buscar todos os autores"));
    };
    AuthorController.prototype.create = function (req, res) {
        service_1.default
            .create(req.body)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.dbErrorHandler, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao criar um novo autor"));
    };
    AuthorController.prototype.getById = function (req, res) {
        var id = parseInt(req.params.id);
        service_1.default
            .getById(parseInt(req.params.id))
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao consultar o autor id = " + id));
    };
    AuthorController.prototype.update = function (req, res) {
        var id = parseInt(req.params.id);
        var props = req.body;
        service_1.default
            .update(id, props)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao atualizar o autor id = " + id + ", com " + props));
    };
    AuthorController.prototype.delete = function (req, res) {
        var id = parseInt(req.params.id);
        service_1.default
            .delete(id)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao deletar o autor id = " + id));
    };
    return AuthorController;
}());
exports.default = new AuthorController();

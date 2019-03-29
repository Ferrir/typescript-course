"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handlers_1 = require("../../api/responses/handlers");
var service_1 = require("./service");
var PostController = /** @class */ (function () {
    function PostController() {
    }
    PostController.prototype.getAll = function (req, res) {
        service_1.default
            .getAll()
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao buscar todas as postagem"));
    };
    PostController.prototype.create = function (req, res) {
        service_1.default
            .create(req.body)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.dbErrorHandler, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao criar uma nova postagem"));
    };
    PostController.prototype.getById = function (req, res) {
        var id = parseInt(req.params.id);
        service_1.default
            .getById(parseInt(req.params.id))
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao consultar a postagem id = " + id));
    };
    PostController.prototype.update = function (req, res) {
        var id = parseInt(req.params.id);
        var props = req.body;
        service_1.default
            .update(id, props)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao atualizar a postagem id = " + id + ", com " + props));
    };
    PostController.prototype.delete = function (req, res) {
        var id = parseInt(req.params.id);
        service_1.default
            .delete(id)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao deletar a postagem id = " + id));
    };
    return PostController;
}());
exports.default = new PostController();

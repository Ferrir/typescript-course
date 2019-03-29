"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatus = require("http-status");
var jwt = require("jwt-simple");
var bcrypt = require("bcrypt");
var config = require('../../config/env/config')();
var Handlers = /** @class */ (function () {
    function Handlers() {
    }
    Handlers.prototype.authFail = function (req, res) {
        res.sendStatus(HttpStatus.UNAUTHORIZED);
    };
    Handlers.prototype.authSuccess = function (res, credentials, data) {
        var isMatch = bcrypt.compareSync(credentials.password, data.password);
        if (isMatch) {
            var payLoad = {
                id: data.id
            };
            res.json({
                token: jwt.encode(payLoad, config.secret)
            });
        }
        else {
            res.status(HttpStatus.UNAUTHORIZED);
        }
    };
    Handlers.prototype.onError = function (res, message, err) {
        console.log("Error: " + err);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(message);
    };
    Handlers.prototype.onSuccess = function (res, data) {
        res.status(HttpStatus.OK).json({
            payload: data
        });
    };
    Handlers.prototype.errorHandlerApi = function (err, req, res, next) {
        console.error("Api error handler was executed: " + err);
        res.status(500).json({
            errorCode: 'ERR-001',
            message: 'Erro interno do Servidor'
        });
    };
    Handlers.prototype.dbErrorHandler = function (res, err) {
        console.log("Ocorreu um erro: " + err);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            code: 'ERR-001',
            message: 'Erro ao criar usuário'
        });
    };
    return Handlers;
}());
exports.default = new Handlers();

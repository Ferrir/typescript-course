"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("../../modules/user/router");
var router_2 = require("../../modules/author/router");
var router_3 = require("../../modules/post/router");
var auth_1 = require("../../modules/auth/auth");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.initRoutes = function (app, auth) {
        app.route('/api/users/all').all(auth.config().authenticate()).get(router_1.default.index);
        app.route('/api/users/create').all(auth.config().authenticate()).post(router_1.default.create);
        app.route('/api/users/:id').all(auth.config().authenticate()).get(router_1.default.findOne);
        app.route('/api/users/:id/update').all(auth.config().authenticate()).put(router_1.default.update);
        app.route('/api/users/:id/destroy').all(auth.config().authenticate()).delete(router_1.default.destroy);
        app.route('/token').post(auth_1.default.auth);
        app.route('/api/author/all').get(router_2.default.index);
        app.route('/api/author/create').post(router_2.default.create);
        app.route('/api/author/:id').get(router_2.default.findOne);
        app.route('/api/author/:id/update').put(router_2.default.update);
        app.route('/api/author/:id/destroy').delete(router_2.default.destroy);
        app.route('/api/post/all').get(router_3.default.index);
        app.route('/api/post/create').post(router_3.default.create);
        app.route('/api/post/:id').get(router_3.default.findOne);
        app.route('/api/post/:id/update').put(router_3.default.update);
        app.route('/api/post/:id/destroy').delete(router_3.default.destroy);
    };
    return Routes;
}());
exports.default = new Routes();

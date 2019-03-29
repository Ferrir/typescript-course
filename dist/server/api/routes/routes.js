"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("../../modules/user/router");
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
    };
    return Routes;
}());
exports.default = new Routes();

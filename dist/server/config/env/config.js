var extension = 'js';
if (process.env.NODE_ENV == 'development')
    extension = 'ts';
//module.exports = () => require('./env/development.env')
module.exports = function () { return require("../env/" + process.env.NODE_ENV + ".env." + extension); };

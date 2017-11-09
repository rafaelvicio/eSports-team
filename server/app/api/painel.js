module.exports = function(app) {

     var api = {};

     api.teste = function(req, res) {

         console.log('teste!');
     };

    return api;
};
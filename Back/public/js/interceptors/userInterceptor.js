angular.module('alurapic')
    .factory('usuarioInterceptor', function($q, $location) {

    var meuInterceptor = {

        response: function(resposta){
            console.log('teste interceptador - response');

            return resposta;
        }

    }

        return meuInterceptor;
    });
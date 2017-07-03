angular.module('alurapic')
    .factory('notFound', function($q, $location) {

    var meuInterceptor = {
    	responseError: function(resposta) {
    		if (resposta.status == 404) {
    		  $location.path('/404');
    		}
            return $q.reject(resposta);
    	}
    }

        return meuInterceptor;
    });
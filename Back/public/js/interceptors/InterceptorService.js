angular.module('alurapic')
    .factory('meuInterceptor', function($q, $location) {

    var meuInterceptor = {
        
    	responseError: function(resposta) {
            
    		if (resposta.status == 401) {
    		  $location.path('/');
    		}
            return $q.reject(resposta);
    	}
    }

        return meuInterceptor;
    });
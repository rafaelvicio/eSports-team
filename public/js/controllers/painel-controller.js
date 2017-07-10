angular.module('alurapic')
	.controller('PainelController', function($scope, $routeParams, $http) {

		$scope.usuario = {};
		$scope.mensagem = '';

		$http.get('/api/painel')
            .then(function() {
            })
            .catch(function(){
            })

	});

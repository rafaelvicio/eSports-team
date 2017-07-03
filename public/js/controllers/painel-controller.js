angular.module('alurapic')
	.controller('PainelController', function($scope, $http ,recursoUsuario, $routeParams, cadastroDeUsuarios) {

		$scope.usuario = {};
		$scope.mensagem = '';

		$scope.usuario = {username: ''};
		$scope.error_message = '';

		$scope.login = function(data) {
			$http.get('/auth/user')
				.then(function(){
					$scope.usuario = data.user.username;
				})
				.catch(function(){
					$scope.error_message = 'Deu ruim';
				})
		};

		$scope.submeter = function() {

			if ($scope.formulario.$valid) {
				cadastroDeUsuarios.cadastrar($scope.usuario)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.usuario = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			}
		};
	});

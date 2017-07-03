angular.module('alurapic')
	.controller('PainelController', function($scope, $http ,recursoUsuario, $routeParams, cadastroDeUsuarios) {

		$scope.usuario = {};
		$scope.mensagem = '';

		$scope.user = {username: ''};
		$scope.error_message = '';

		$scope.login = function() {
			$http.post('/auth/github', $scope.user).success(function(data) {
				if(data.state == 'success') {
					$rootScope.authenticated = true;
					$rootScope.current_user = data.user.username;
					$location.path('/painel/index');
				} else {
					$scope.error_message = data.message;
				}
			});
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

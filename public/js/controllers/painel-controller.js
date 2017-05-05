angular.module('alurapic')
	.controller('PainelController', function($scope, recursoUsuario, $routeParams, cadastroDeUsuarios) {

		$scope.usuario = {};
		$scope.mensagem = '';

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

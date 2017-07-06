angular.module('alurapic')
	.controller('AuthController', function($scope, $http, $location, recursoUsuario, $routeParams, cadastroDeUsuarios) {

	$scope.usuario = {};
    $scope.mensagem = '';

    $scope.cadastrar = function() {
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

    $scope.autenticar = function() {

        var usuario = $scope.usuario;

        $http.post('/api/auth/autenticar', {login: usuario.login, senha: usuario.senha})
        .then(function() {
            $location.path('/painel');
        }, function(erro) {
            $scope.usuario = {};
            $scope.mensagem = 'Login/Senha incorretos';
        });
    };

    $scope.deslogar = function() {
        console.log('Deslogando...')
    }
});
angular.module('alurapic')
	.controller('AuthController', function($scope, $http, $location) {

	$scope.usuario = {};
    $scope.mensagem = '';

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
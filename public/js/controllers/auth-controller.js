angular.module('alurapic')
	.controller('AuthController', function($scope, $http, $location, $routeParams) {

	$scope.usuario = {};
    $scope.mensagem = '';

    $scope.cadastrar = function() {

        var usuario = $scope.usuario;

        $http.post('/api/usuarios', usuario)
            .then(function() {
                console.log('deu certo')
                $scope.mensagem = 'Usuário cadastrado com sucesso!';
            })
            .catch(function(){
                console.log('deu ruim')
                $scope.mensagem = 'Usuário não pode ser cadastrado!';
            })
        
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
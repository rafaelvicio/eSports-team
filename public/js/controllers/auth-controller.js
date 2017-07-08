angular.module('alurapic')
	.controller('AuthController', function($scope, $http, $location, recursoUsuario, $routeParams, cadastroDeUsuarios) {

	$scope.usuario = {};
    $scope.mensagem = '';

    $scope.cadastrar = function() {

        	if ($scope.formulario.$valid) {
				cadastroDeUsuarios.cadastrar($scope.usuario)
				.then(function(dados) {
                    $scope.mensagem = 'Cadastro realizado com sucesso!';
                    if (usuario.inclusao) {
                        $scope.usuario = {};
                         $scope.mensagem = 'Cadastro realizado com sucesso!';
                    } else {
                        $scope.mensagem = 'Atualização realizada com sucesso!';
                    }
				}).catch(function(erro) {
                    console.log('caiu no catch do cadastrar')
					$scope.mensagem = erro.mensagem;
                     console.log(erro.mensagem);
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
angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'usuarioServico', 'meusServicos'])
	.config(function($routeProvider, $locationProvider) {

		$routeProvider.when('/', {
			templateUrl: 'partials/index.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/cadastro', {
			templateUrl: 'partials/cadastro.html',
			controller: 'UsuarioController'
		});

		$routeProvider.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/fotos', {
			templateUrl: 'partials/principal.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/fotos/new', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.when('/fotos/edit/:fotoId', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.otherwise({redirectTo: '/cadastro'});

	});

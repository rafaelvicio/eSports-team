	angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

		$httpProvider.interceptors.push('tokenInterceptor');
		$httpProvider.interceptors.push('meuInterceptor');

		$routeProvider.when('/', {
			templateUrl: 'partials/index.html',
			controller: 'PainelController'
		});

		$routeProvider.when('/cadastro', {
			templateUrl: 'partials/cadastro.html',
			controller: 'AuthController'
		});

		$routeProvider.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'AuthController'
		});

		// Painel

		$routeProvider.when('/painel', {
			templateUrl: 'partials/painel/index.html',
			controller: 'PainelController'
		});

		// Paginas fixas

		$routeProvider.when('/clientes', {
			templateUrl: 'partials/clientes.html'
		});

		$routeProvider.when('/blog', {
			templateUrl: 'partials/blog.html'
		});

		$routeProvider.when('/suporte', {
			templateUrl: 'partials/suporte.html'
		});

		$routeProvider.when('/contato', {
			templateUrl: 'partials/contato.html'
		});

		$routeProvider.when('/sobre', {
			templateUrl: 'partials/sobre.html'
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

		// Eros

		$routeProvider.when('/404', {
			templateUrl: 'partials/404.html'
		});

		$routeProvider.when('/500', {
			templateUrl: 'partials/500.html'
		});

		$routeProvider.otherwise({redirectTo: '/'});
	});

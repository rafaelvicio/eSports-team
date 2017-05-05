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

		$routeProvider.when('/painel/index', {
			templateUrl: 'partials/painel/index.html',
			controller: 'PainelController'
		});

		$routeProvider.when('/perfil/:usuarioName', {
			templateUrl: 'partials/perfil/index.html',
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

		$routeProvider.otherwise({redirectTo: '/cadastro'});

	});

angular.module('usuarioServico', ['ngResource'])
	.factory('recursoUsuario', function($resource) {

		return $resource('/api/usuarios/:usuarioId', null, {
			'update' : {
				method: 'PUT'
			}
		});
	})
	.factory("cadastroDeUsuarios", function(recursoUsuario, $q) {
		var service = {};
		service.cadastrar = function(usuario) {
			return $q(function(resolve, reject) {

				if(usuario._id) {
					recursoUsuario.update({usuarioId: usuario._id}, usuario, function() {
						resolve({
							mensagem: 'Usuario ' + usuario.login + ' atualizada com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar o usuario ' + usuario.login
						});
					});

				} else {
					recursoUsuario.save(usuario, function() {
						console.log('não tem id');
						resolve({
							mensagem: 'Usuario ' + usuario.login + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir a usuario ' + usuario.login
						});
					});
				}
			});
		};
		return service;
    });

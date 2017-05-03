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
							mensagem: 'Usuario ' + usuario.nome + ' atualizada com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar o usuario ' + usuario.nome
						});
					});

				} else {
					recursoUsuario.save(usuario, function() {
						resolve({
							mensagem: 'Usuario ' + usuario.nome + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir a usuario ' + usuario.nome
						});
					});
				}
			});
		};
		return service;
    });

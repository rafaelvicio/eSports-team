var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
	
	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
		clientID: 'fd1b4c7fbf9173c1faf7',
		clientSecret: '3588af70ba74ce583757c336a49da034d47442ed',
		callbackURL: 'http://localhost:3001/auth/github/callback'
	}, function(accessToken, refreshToken, profile, done) {
		
		Usuario.findOrCreate(
			{ "login" : profile.username}, 
			{ "nome" : profile.username},  
			function(erro, usuario) {
				if(erro) {
					return done(erro);
				} 
				return done(null, usuario);
			}
		);
	}));

	passport.serializeUser(function(usuario, done) {
	  done(null, usuario._id);
	});

	passport.deserializeUser(function(id, done) {
	  Usuario.findById(id).exec()
	  .then(function(usuario) {
	  	done(null, usuario);	
	  });
	});
};
var passport = require('passport');

module.exports = function(app){

  app.get('/auth/github', 
        passport.authenticate('github'));
    app.get('/auth/github/callback',
        passport.authenticate('github', {
        failureRedirect: '/'}),
        function (req, res) {
            
        //sucesso na autenticação
        res.redirect('/#!/painel/index');
    });

};
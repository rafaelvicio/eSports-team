var passport = require('passport');

module.exports = function(app){

  app.get('/auth/github', passport.authenticate('github'));
  app.get('/auth/github/callback',
            passport.authenticate('github', {
                sucessRedirect: '/'
            }));

};
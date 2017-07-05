var passport = require('passport');
var jwt = require('jsonwebtoken');
var passportJWT = require('passport-jwt');
var mongoose = require('mongoose');

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: 'minhaChaveSecreta'
}

module.exports = {
    get auth(){
        var User = mongoose.modelNames.Usuario;

        var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, ndex){
            User.findById(jwt_payload._id).exec()
                .then(user => {
                    if(user){
                        next(null, user);
                    } else {
                        next(null, false);
                    }
                })
        })

        passport.use(strategy);

        return {
            initialize: function() {
                return passport.initialize();
            },
            get authenticate(){
                return passport.authenticate('jwt', {session: false});
            }
        }

    },
    login: function(name, senha, callback) {
        var User = mongoose.modelNames.Usuario;

        User.findOne({name, password}).exe()
            .then(user => {
                if(user){
                    var payload = {_id: user._id};
                    var token = jwt.sign(payload, jwtOptions.secretOrKey);
                    callback({'message': 'ok', token});
                } else {
                    callback(false);
                }
            })

    }
}


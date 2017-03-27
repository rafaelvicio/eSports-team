var express = require('express');


var routes = function(User){
    var userRouter = express.Router();

    userRouter.route('/')
        .post(function(req, res){
            var user = new User(req.body);


            user.save();
            res.status(201).send(user);

        })
        .get(function(req,res){

            var query = {};

            if(req.query.genre)
            {
                query.genre = req.query.genre;
            }
            User.find(query, function(err,users){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(users);
            });
        });

    userRouter.use('/:userId', function(req,res,next){
        User.findById(req.params.userId, function(err,user){
            if(err)
                res.status(500).send(err);
            else if(user)
            {
                req.user = user;
                next();
            }
            else
            {
                res.status(404).send('no user found');
            }
        });
    });
    userRouter.route('/:userId')
        .get(function(req,res){

            res.json(req.user);

        })
        .put(function(req,res){
            req.user.name = req.body.name;
            req.user.password = req.body.password;
            req.user.email = req.body.email;
            req.user.read = req.body.read;
            req.user.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.user);
                }
            });
        })
        .delete(function(req,res){
            req.user.remove(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.status(204).send('Removed');
                }
            });
        });
    return userRouter;
};

module.exports = routes;

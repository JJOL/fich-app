var User = require('./models/user');


module.exports = function(app, root) {

    app.get('/api/user', function(req, res) {
        User.find(function(err, users) {
            if(err)
                res.send(err);

            res.json(users);
        });
    });

    app.get('/api/user/all/delete', function(req, res) {
        User.remove({}, function(err) {
          console.log(err);
        });
        res.send("LOL");
    });

    app.get('*', function(req, res) {
        //res.send("It Worked... More or less");
        //res.sendFile();
        res.sendFile(root+"/public/views/index.html");
    });


}

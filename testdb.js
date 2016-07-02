var mongoose = require('mongoose');
var User = require('./app/models/user');

var db = require('./config/db');
mongoose.connect(db.url);

var usr = new User({ name: "Juan Jo" });

usr.save(function(err) {
  if (err) {
    console.log("Meow Error");
  } else {
    console.log("Meow");
  }
});

console.log("Test Ran");

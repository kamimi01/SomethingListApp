var MongoCLient = require('mongodb'),
    settings = require('./settings');
MongoCLient.connect = ("mongodb://" + settings.host + settings.db, function(err, db) {
    if (err) { return console.dir(err);}
    console.log("connected to db");
});
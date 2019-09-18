const mongoose = require('mongoose');

mongoose.set('debug' , true);
mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost/vote');

module.exports.poll = require('./poll');
module.exports.user = require('./user');
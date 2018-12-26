const mongoose = require('mongoose');

const URI = 'mongodb://ascanio:ascanio97@ds157439.mlab.com:57439/employees-db';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => consle.log(err));

module.exports = mongoose;
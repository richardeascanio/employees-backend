const mongoose = require('mongoose');

const URI = 'mongodb://localhost/employees-db';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => consle.log(err));

module.exports = mongoose;
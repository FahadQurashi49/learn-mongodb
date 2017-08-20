const mongoose = require('mongoose');

// ES6 Promise
mongoose.Promise = global.Promise;

before(function (done) {
  // if doesn't exist create it else just connect to it
  mongoose.connect('mongodb://localhost/testaroo', { useMongoClient: true });

  // listen to open event once
  mongoose.connection.once('open', function(){
    console.log('Connection has been made');
    done();
  }).on('error', function(error){ //listen to error event every time
    console.log('Connection error: ' + error);
  });
});

// Drop the collection before each test
beforeEach(function (done) {
  // drop the collection
  mongoose.connection.collections.mariochars.drop(function () {
    done();
  });
});

var Sails = require('sails');
var config = require('../config/env/test');
var Barrels = require('barrels');

before((done) => {
  Sails.lift(config, (error, server) => {
    if (error) return done(error);
    sails = server;
    done();
  });
});

after(done => sails.lower(done));

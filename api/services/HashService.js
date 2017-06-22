"use strict";

const hash = require('sails-service-hash');
const _    = require('lodash');

module.exports = (config) => ({
  bcrypt: hash('bcrypt', _.merge({}, sails.config.services.hash.bcrypt, config))
});

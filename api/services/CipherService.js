"use strict";

const cipher = require('sails-service-cipher');
const _      = require('lodash');

module.exports = (config) => ({
    jwt: cipher('jwt', _.merge({}, sails.config.services.cipher.jwt, config))
});

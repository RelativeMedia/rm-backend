"use strict";

const storage = require('sails-service-storage');
const _       = require('lodash');

module.exports = (config) => storage('Amazon', _.merge({}, sails.config.services.storage, config));

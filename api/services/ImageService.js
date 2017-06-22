"use strict";

const image = require('sails-service-image');
const _     = require('lodash');

module.exports = (config) => image('GM', _.merge({}, sails.config.services.image, config));

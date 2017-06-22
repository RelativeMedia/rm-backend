"use strict";

const mailer = require('sails-service-mailer');
const _      = require('lodash');

module.exports = (config) => mailer('SendGrid', _.merge({}, sails.config.services.mailer, config));

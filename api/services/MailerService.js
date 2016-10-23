"use strict";

const mailer = require('sails-service-mailer');
const config = require('../../config/local');
module.exports = mailer('SendGrid', config.services.mailer);

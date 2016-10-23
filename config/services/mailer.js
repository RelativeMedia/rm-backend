"use strict";

module.exports = {
  services: {
    mailer: {
      from: 'noreply@relative.media',
      to: 'mike@relative.media',
      subject: '[DEV] Web Contact Form',
      provider: {
        auth: {
          api_user: 'relativemedia-test',
          api_key: '^hhFV16S!'
        }
      }
    }
  }
};

"use strict";

/**
 * Route Mappings
 *
 * Your routes map URLs to views and controllers
 */

module.exports = {
  routes: {
    'POST /v1/email/send': {
      controller: 'EmailController',
      action: 'send'
    }
  }
};

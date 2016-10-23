"use strict";

/**
 * Email
 * @description :: Model for storing Email records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    email: {
      type: 'email',
      required: true
    },
    phoneNumber: {
      type: 'string'
    },
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    message: {
      type: 'string',
      required: true
    },
    subject: {
      type: 'string',
      required: true
    },
    ipAddress: {
      type: 'ip'
    },
    status: {
      type: 'string',
      defaultsTo: 'pending'
    },

    toJSON() {
      let obj = this.toObject();
      delete obj.ipv4;
      delete obj.ipv6;
      delete obj.lastName;
      return obj;
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next(),
  afterCreate: (values, next) => next()
};

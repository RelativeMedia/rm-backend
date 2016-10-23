"use strict";

/**
 * Project
 * @description :: Model for storing Project records
 */

module.exports = {
  schema: true,

  attributes: {
    shortDesc: {
      type: 'string',
      required: true,
    },
    longDesc: {
      type: 'text'
    },
    thumbnailImage: {
      type: 'string'
    },
    images: {
      type: 'array'
    },
    startDate: {
      type: 'date'
    },
    endDate: {
      type: 'date'
    },

    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};

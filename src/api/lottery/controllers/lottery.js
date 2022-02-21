'use strict';

/**
 *  lottery controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::lottery.lottery');

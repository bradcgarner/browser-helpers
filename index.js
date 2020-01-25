'use strict';

const dimensions = require('./build/dimensions');
const readWindow = require('./build/read-window');
const smooothScroll = require('./build/smooth-scroll');

module.exports = Object.assign({},
  dimensions,
  readWindow,
  smooothScroll
);
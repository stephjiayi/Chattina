'use strict';

var helpers = require('./helpers');
var routing = require('./routing');
var configMap = {

};

/**
 * PUBLIC FUNCTIONS
 */

var configModule = function(inputMap) {
  helpers.configMap(inputMap, configMap);
};

var init = function() {
  routing.init();
  routing.moveTo('/about');
};

module.exports = {
  configModule,
  init: init
};

'use strict';

var BackboneRouteControl = require('backbone-route-control');

var Router = BackboneRouteControl.extend({
  routes: {
    '': 'todo#index'
  }
});

module.exports = Router;
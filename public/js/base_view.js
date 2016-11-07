'use strict';

var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var BaseView = Backbone.View.extend({
  initialize: function(options) {
    this.options = options || {};
  },

  component: function() {
    return null;
  },

  render: function() {
    ReactDOM.render(this.component(), this.el);
    return this;
  }
});

module.exports = BaseView;
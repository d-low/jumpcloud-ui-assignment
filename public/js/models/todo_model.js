'use strict';

var ToDoApp = require('../todo_app.js');

var ToDoModel = Backbone.Model.extend({
  defaults: function() {
    return {
      id: undefined,
      done: false,
      decription: ''
    };
  }
});

module.exports = ToDoModel;
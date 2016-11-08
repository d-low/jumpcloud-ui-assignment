'use strict';

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
'use strict';

var BaseView = require('../../base_view');
var ToDoListComponent = require('./todo_list_component');

var ToDoListView = BaseView.extend({
  component: function() {
    return new ToDoListComponent({
      toDoCollection: this.options.toDoCollection
    });
  }
});

module.exports = ToDoListView;
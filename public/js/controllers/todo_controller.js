var ToDoCollection = require('../collections/todo_collection');
var ToDoModel = require('../models/todo_model');
var ToDoList = require('../screens/todo/todo_list.js');

var ToDoController = function(options) {
  var app = options.app;

  return {
    index: function() {
      var toDoCollection = new ToDoCollection();

      toDoCollection.fetch().done(function() {
        var toDoList = new ToDoList({
          toDoCollection: toDoCollection
        });

        app.mainView.pageRender(toDoList);
      });
    }
  };
};

module.exports = ToDoController;
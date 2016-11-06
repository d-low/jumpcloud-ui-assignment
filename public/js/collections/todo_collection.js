var ToDoApp = require('../todo_app.js');
var ToDoModel = require('../models/todo_model.js');

var ToDoCollection = Backbone.Collection.extend({
  comparator: function(a, b) {
    return b.id - a.id;
  },
  model: ToDoModel,
  url: '/api/todos'
});

module.exports = ToDoCollection;
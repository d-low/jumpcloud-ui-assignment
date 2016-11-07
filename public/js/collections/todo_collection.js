var ToDoApp = require('../todo_app.js');
var ToDoModel = require('../models/todo_model.js');

var ToDoCollection = Backbone.Collection.extend({
  comparator: function(a, b) {
    // Sort models in descending ID order, i.e. newest first.
    return b.id - a.id;
  },
  model: ToDoModel,
  url: '/api/todos'
});

module.exports = ToDoCollection;
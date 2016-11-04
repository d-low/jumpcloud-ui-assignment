var ToDoApp = require('../todo_app.js');
var ToDoModel = require('../models/todo_model.js');

var ToDoCollection = Backbone.Collection.extend({
  model: ToDoModel,
  url: '/api/todos'
});

module.exports = ToDoCollection;
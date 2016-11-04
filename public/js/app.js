// TBD: Do React and Backbone need to be exposed as globals?  jQuery and 
// underscore certainly do.
global.jQuery = global.$ = require('jquery');
global._ = require('underscore');
global.Backbone = require('backbone');

global.ToDoApp = require('./todo_app');
global.ToDoApp.initialize();
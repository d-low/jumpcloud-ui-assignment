'use strict';

// REVIEW: Is Backbone required as a global here?
global.jQuery = global.$ = require('jquery');
global._ = require('underscore');
global.Backbone = require('backbone');

global.ToDoApp = require('./todo_app');
global.ToDoApp.initialize();
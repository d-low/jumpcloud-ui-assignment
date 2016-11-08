'use strict';

var Backbone = require('backbone');
var Router = require('./router');
var MainView = require('./screens/main/index');
var ToDoController = require('./controllers/todo_controller');

var ToDoApp = {
  initialize: function() {
    this.Controllers = {
      todo: new ToDoController({
        app: this
      })
    };

    this.router = new Router({
      app: this,
      controllers: this.Controllers
    });

    // HACK: Add #todo-app if not already in DOM to support Karma testing.

    var $todoApp = $('#todo-app');

    if ($todoApp.length === 0) {
      $('body').prepend('<div id="todo-app"></div>');
    }

    this.mainView = new MainView({
      el: $('#todo-app'),
      router: this.router
    });

    this.showApp();
  },

  showApp: function() {
    this.mainView.render();
    Backbone.history.start({
      pushState: true
    });
  }
};

module.exports = ToDoApp;
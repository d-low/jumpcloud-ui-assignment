'use strict';

require('jasmine-ajax');
var ToDoCollection = require('../../js/collections/todo_collection');

describe('ToDoCollectionSpec', function() {
  var toDoCollection = null;

  beforeEach(function() {
    toDoCollection = new ToDoCollection();
  });

  describe('Configuration', function() {
    it('should have the correct url property', function() {
      expect(toDoCollection.url).toEqual('/api/todos');
    });
  });

  describe('Data', function() {
    var request = null;
    var response = {
      success: {
        status: 200,
        responseText: '[{"id":1,"done":false,"description":"Pick up eggs"},{"id":2,"done":false,"description":"Pay electric bill"},{"id":3,"done":true,"description":"Create todo API"}]'
      }
    };

    beforeEach(function() {
      jasmine.Ajax.install();
      toDoCollection.fetch();
      request = jasmine.Ajax.requests.mostRecent();
      request.respondWith(response.success);
    });

    afterEach(function() {
      jasmine.Ajax.uninstall();
    });

    it('should contain three models', function() {
      expect(toDoCollection.models.length).toEqual(3);
    });

    it('should sort them by id in descending order', function() {
      expect(
        toDoCollection.at(0).id > toDoCollection.at(1).id &&
        toDoCollection.at(1).id > toDoCollection.at(2).id
      ).toBe(true);
    });
  });
});
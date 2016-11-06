var React = require('react');
var ReactBackbone = require('react.backbone');
var ToDoAddItemComponent = require('./todo_add_item_component');
var ToDoListItemComponent = require('./todo_list_item_component');

var ToDoListComponent = React.createFactory(
  React.createBackboneClass({
    mixins: [
      React.BackboneMixin('toDoCollection', 'change')
    ],

    render: function() {
      var toDoListItems = this.props.toDoCollection
        .sort()
        .map(function(toDoItem) {
          /* beautify ignore:start */
          return (
            <li className="todo-list__item" key={toDoItem.id}> 
              <ToDoListItemComponent toDoItem={toDoItem} />
            </li>
          );
          /* beautify ignore:end */
        });

      /* beautify ignore:start */
      return ( 
        <div className="todo-list-container">
          <h1 className="todo-list__header">To Do List</h1> 
          <ToDoAddItemComponent toDoCollection={this.props.toDoCollection}/>
          <ul className="todo-list"> 
            {toDoListItems} 
          </ul> 
        </div>
      );
      /* beautify ignore:end */
    }
  })
);

module.exports = ToDoListComponent;
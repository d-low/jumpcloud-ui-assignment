var React = require('react');
var ReactBackbone = require('react.backbone');
var ToDoListItemComponent = require('./todo_list_item_component');

var ToDoListComponent = React.createFactory(
  React.createBackboneClass({
    // mixins: [
    //   React.BackboneMixin('users', 'change')
    // ],

    render: function() {
      var toDoListItems = this.props.toDoCollection.map(function(toDoItem) {
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
          <div className="todo-list__add-item">
            <div className="todo-list-col-left">
              <input className="todo-list__add-item__input" type="text" placeholder="Enter a new todo" />
            </div>
            <div className="todo-list-col-right">
              <button className="todo-list__add-item__action">
                Add 
              </button>
            </div>
          </div>
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
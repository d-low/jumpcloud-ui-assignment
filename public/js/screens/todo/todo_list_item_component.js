var React = require('react');
var Backbone = require('backbone');
var ReactBackbone = require('react.backbone');
var classNames = require('classnames');

var ToDoListItemComponent = React.createFactory(
  React.createBackboneClass({
    render: function() {
      var toDoItem = this.props.toDoItem;
      var description = toDoItem.get('description');
      var done = toDoItem.get('done');
      var id = toDoItem.get('id');

      /* beautify ignore:start */
      return (
        <div className={classNames({'todo-item': true, 'todo-item--done': done})}>
          <div className="todo-list-col-left">
            <input className="todo-item__done" defaultChecked={done} type="checkbox" title="Done?"/> 
            <label className="todo-item__label">{description}</label>
          </div>
          <div className="todo-list-col-right">
            <button className="todo-item__action">Edit</button>
            <button className="todo-item__action--last">Delete</button>
          </div>
        </div>
      );
      /* beautify ignore:end */
    }
  })
);

module.exports = ToDoListItemComponent;
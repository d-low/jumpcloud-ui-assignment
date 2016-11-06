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
          <h2 className="todo-item__name">{description}</h2>
          <button className="todo-item__action">Complete</button>
          <button className="todo-item__action--last">Delete</button>
        </div>
      );
      /* beautify ignore:end */
    }
  })
);

module.exports = ToDoListItemComponent;
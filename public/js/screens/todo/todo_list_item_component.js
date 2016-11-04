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
        <div className={classNames({'todo-item': true, 'done': done})}>
          <h2>{description}</h2>
          <button>Complete</button>
          <button>Delete</button>
        </div>
      );
      /* beautify ignore:end */
    }
  })
);

module.exports = ToDoListItemComponent;